<template>
  <div class="map-wrapper" ref="wrapper" @click="handleOutsideClick">
    <svg ref="svg" width="960" height="600"></svg>

    <div
      v-if="selectedState && stateData[selectedState]"
      class="tooltip"
      :style="{ top: tooltipPosition.y + 'px', left: tooltipPosition.x + 'px' }"
      @mouseenter="isMouseOverTooltip = true"
      @mouseleave="handleTooltipMouseLeave"
      @click.stop
    >
      <div class="tooltip-header">
        {{ stateData[selectedState].name }}
      </div>
      <div class="tooltip-body">
        <!-- <p><strong>Shelters:</strong> {{ stateData[selectedState].shelters }}</p>
        <p><strong>Intake:</strong> {{ stateData[selectedState].intake }}</p>
        <p><strong>Adoptions:</strong> {{ stateData[selectedState].adoptions }}</p>
        <p><strong>Euthanized:</strong> {{ stateData[selectedState].euthanized }}</p> -->

        <div class="lawyers">
          <strong>Lawyers:</strong>
          <ul>
            <li v-for="lawyer in stateData[selectedState].lawyers" :key="lawyer">
              <a :href="`/lawyers/${slugify(lawyer)}`">{{ lawyer }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as d3 from 'd3'



// Refs and reactive state
const svg = ref(null)
const wrapper = ref(null)
const selectedState = ref(null)
const tooltipPosition = ref({ x: 0, y: 0 })
const isMouseOverTooltip = ref(false)

// Slug helper
const slugify = (name) =>
  name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')

// Dummy state data
const stateData = {
  Texas: {
    name: 'Texas',
    shelters: 14,
    intake: 10469,
    adoptions: 3724,
    euthanized: 1034,
    lawyers: ['Jane Doe', 'John Smith'],
  },
  'New York': {
    name: 'New York',
    shelters: 10,
    intake: 8500,
    adoptions: 4000,
    euthanized: 800,
    lawyers: ['Alice Johnson', 'Bob Lee'],
  },
  California: {
    name: 'California',
    shelters: 18,
    intake: 12000,
    adoptions: 5000,
    euthanized: 1500,
    lawyers: ['Maria Torres', 'Ethan Wang'],
  },
  Nevada: {
    name: 'Nevada',
    shelters: 6,
    intake: 5000,
    adoptions: 2400,
    euthanized: 700,
    lawyers: ['Sam Dean', 'Ellie Grace'],
  },
  Illinois: {
    name: 'Illinois',
    shelters: 11,
    intake: 9100,
    adoptions: 3700,
    euthanized: 890,
    lawyers: ['Liam Carter', 'Olivia Brooks'],
  },
  Washington: {
    name: 'Washington',
    shelters: 8,
    intake: 7600,
    adoptions: 3300,
    euthanized: 640,
    lawyers: ['Noah Reed', 'Sophia Adams'],
  },
  Georgia: {
    name: 'Georgia',
    shelters: 9,
    intake: 8200,
    adoptions: 3500,
    euthanized: 720,
    lawyers: ['Mason Hill', 'Emma Scott'],
  },
}

// Tooltip close on leave
const handleTooltipMouseLeave = () => {
  setTimeout(() => {
    if (!isMouseOverTooltip.value) {
      selectedState.value = null
    }
  }, 200)
}

// Close tooltip on outside click
const handleOutsideClick = (e) => {
  if (!e.target.closest('.tooltip')) {
    selectedState.value = null
  }
}

onMounted(async () => {
  const geoData = await d3.json('/us-states.geojson')
  const projection = d3.geoAlbersUsa().scale(1000).translate([480, 300])
  const path = d3.geoPath().projection(projection)
  const svgEl = d3.select(svg.value)

  // Draw state areas
  svgEl
    .selectAll('path')
    .data(geoData.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('fill', d => (stateData[d.properties.NAME] ? 'white' : 'white'))
    .attr('stroke', '#e73d84')
    .attr('class', d => (stateData[d.properties.NAME] ? 'has-data' : ''))
    .on('click', (event, d) => {
      const name = d.properties.NAME
      if (stateData[name]) {
        selectedState.value = name
        const wrapperRect = wrapper.value.getBoundingClientRect()
        tooltipPosition.value = {
          x: event.clientX - wrapperRect.left + 10,
          y: event.clientY - wrapperRect.top + 10,
        }
        event.stopPropagation()
      }
    })
    

  // Add dot and ripple
  geoData.features.forEach((feature) => {
    const name = feature.properties.NAME
    if (stateData[name]) {
      const [cx, cy] = projection(d3.geoCentroid(feature))

      svgEl
        .append('g')
        .attr('class', 'bubble-wrapper')
        .attr('transform', `translate(${cx}, ${cy})`)
        .on('click', (event) => {
          selectedState.value = name
          const wrapperRect = wrapper.value.getBoundingClientRect()
          tooltipPosition.value = {
            x: event.clientX - wrapperRect.left + 10,
            y: event.clientY - wrapperRect.top + 10,
          }
          event.stopPropagation()
        })
        .call(g => {
          g.append('circle')
            .attr('class', 'ripple-circle')

          g.append('circle')
            .attr('class', 'bubble-dot')
            .attr('r', 6)
        })
    }
  })

  // Add state names
  svgEl
  .selectAll('text')
  .data(geoData.features)
  .enter()
  .append('text')
  .attr('class', 'state-label') // Add your class here
  .filter(d => !!d.properties.NAME) // Filter out falsy values
  .attr('transform', d => {
    const centroid = projection(d3.geoCentroid(d));
    return centroid ? `translate(${centroid})` : null;
  })
  .text(d => {
  const skip = ['District of Columbia', 'Rhode Island', 'Connecticut', 'Delaware' ,'Vermont' , 'Massachusetts' , 'Pennsylvania' , 'West Virginia' , 'Alabama']
  return skip.includes(d.properties.NAME) ? '' : d.properties.NAME
})

  

})
</script>


