<template>
  <section id="overview">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <DashboardLeft />
        </div>

        <div class="col-md-6">
          <h4 class="hdbold mt-5 mb-3">Add New Case</h4>
          <form @submit.prevent="submitForm">
            <!-- Case Title -->
            <div class="form-floating mb-3">
              <input v-model="form.caseTitle" type="text" class="form-control" id="caseTitle" placeholder="Case Title" required />
              <label for="caseTitle">Case Title</label>
            </div>

            <!-- Case Type -->
            <div class="form-floating mb-3">
              <select v-model="form.caseType" class="form-select" id="caseType" required>
                <option disabled value="">Select Case Type</option>
                <option>Divorce</option>
                <option>Custody</option>
                <option>Property</option>
                <option>Civil</option>
                <option>Criminal</option>
              </select>
              <label for="caseType">Case Type</label>
            </div>

            <!-- Court Name -->
            <div class="form-floating mb-3">
              <input v-model="form.courtName" type="text" class="form-control" id="courtName" placeholder="Court Name" />
              <label for="courtName">Court Name</label>
            </div>

            <!-- Filing Date -->
            <div class="form-floating mb-3">
              <input v-model="form.filingDate" type="date" class="form-control" id="filingDate" required />
              <label for="filingDate">Filing Date</label>
            </div>

            <!-- Upcoming Hearing Date -->
            <div class="form-floating mb-3">
              <input v-model="form.hearingDate" type="date" class="form-control" id="hearingDate" required />
              <label for="hearingDate">Upcoming Hearing Date</label>
            </div>

            <!-- Status -->
            <div class="form-floating mb-3">
              <select v-model="form.status" class="form-select" id="status" required>
                <option disabled value="">Select Status</option>
                <option>Open</option>
                <option>Closed</option>
                <option>Pending</option>
              </select>
              <label for="status">Case Status</label>
            </div>

            <!-- Client Name -->
            <div class="form-floating mb-3">
              <input v-model="form.clientName" type="text" class="form-control" id="clientName" placeholder="Client Name" required />
              <label for="clientName">Client Name</label>
            </div>

            <!-- Client Email -->
            <div class="form-floating mb-3">
              <input v-model="form.clientEmail" type="email" class="form-control" id="clientEmail" placeholder="Client Email" />
              <label for="clientEmail">Client Email</label>
            </div>

            <!-- Contact Number -->
            <div class="form-floating mb-3">
              <input v-model="form.contactNo" type="tel" class="form-control" id="contactNo" placeholder="Contact Number" required />
              <label for="contactNo">Contact Number</label>
            </div>

            <!-- Opponent Name -->
            <div class="form-floating mb-3">
              <input v-model="form.opponentName" type="text" class="form-control" id="opponentName" placeholder="Opponent Name" />
              <label for="opponentName">Opposing Party</label>
            </div>

            <!-- Case Description -->
            <div class="form-floating mb-4">
              <textarea v-model="form.description" class="form-control" placeholder="Case Description" id="description" style="height: 150px" required></textarea>
              <label for="description">Case Description</label>
            </div>

            <!-- Consultation Fee -->
            <div class="form-floating mb-3">
              <input v-model="form.consultationFee" type="number" class="form-control" id="consultationFee" placeholder="Consultation Fee" />
              <label for="consultationFee">Consultation Fee ($)</label>
            </div>

            <!-- Retainer Fee -->
            <div class="form-floating mb-3">
              <input v-model="form.retainerFee" type="number" class="form-control" id="retainerFee" placeholder="Retainer Fee" />
              <label for="retainerFee">Retainer Fee ($)</label>
            </div>

            <!-- Payment Status -->
            <div class="form-floating mb-4">
              <select v-model="form.paymentStatus" class="form-select" id="paymentStatus">
                <option disabled value="">Select Payment Status</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Partial</option>
                <option>Overdue</option>
              </select>
              <label for="paymentStatus">Payment Status</label>
            </div>

            <!-- Submit Button -->
            <div class="d-grid">
              <button type="submit" class="btn1 btn-primary">Save Case</button>
            </div>
          </form>
        </div>

        <div class="col-md-3">
          <DashboardRight />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import DashboardLeft from '@/components/DashboardLeft.vue'
import DashboardRight from '@/components/DashboardRight.vue'

// Reactive form state
const form = reactive({
  caseTitle: '',
  caseType: '',
  courtName: '',
  filingDate: '',
  hearingDate: '',
  status: '',
  clientName: '',
  clientEmail: '',
  contactNo: '',
  opponentName: '',
  description: '',
  consultationFee: null,
  retainerFee: null,
  paymentStatus: '',
})

// Form submission logic
const submitForm = async () => {
  const requiredFields = [
    form.caseTitle,
    form.caseType,
    form.status,
    form.clientName,
    form.description,
    form.filingDate,
    form.hearingDate,
    form.contactNo
  ]

  const hasEmpty = requiredFields.some(field => !field)

  if (hasEmpty) {
    alert('Please fill out all required fields.')
    return
  }

  const payload = {
    user_id: 1, // TODO: Replace with dynamic user ID
    title: form.caseTitle,
    client_name: form.clientName,
    client_email: form.clientEmail,
    contact_no: form.contactNo,
    opponent_name: form.opponentName,
    case_description: form.description,
    status: form.status.toLowerCase(),
    case_type: form.caseType,
    court_name: form.courtName,
    consultation_fee: form.consultationFee,
    retainer_fee: form.retainerFee,
    payment_status: form.paymentStatus,
    case_date: form.filingDate,
    upcoming_hearing: form.hearingDate
  }

  try {
    const response = await axios.post('/api/cases', payload)
    alert('Case created successfully!')
    console.log(response.data)
  } catch (err) {
    const errorMsg = err.response?.data?.errors || err.message
    alert('Failed to create case. Details: ' + JSON.stringify(errorMsg))
    console.error('Submission error:', err.response?.data || err)
  }
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>
