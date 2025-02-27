<template>
    <div class="contact-form-container container align-items-stretch flex-column">
        <h2>Contact Us</h2>
        
        <!-- Form with basic validation -->
        <form @submit.prevent="handleSubmit">
            <!-- Name Input -->
            <div class="form-group">
                <label for="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    class="form-control" 
                    :class="{'is-invalid': formErrors.name}" 
                    required
                />
                <div v-if="formErrors.name" class="invalid-feedback">
                    Please enter your name.
                </div>
            </div>
            
            <!-- Email Input -->
            <div class="form-group">
                <label for="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    class="form-control" 
                    :class="{'is-invalid': formErrors.email}" 
                    required
                />
                <div v-if="formErrors.email" class="invalid-feedback">
                    Please enter a valid email address.
                </div>
            </div>

            <!-- Subject Input -->
            <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                    type="text" 
                    id="subject" 
                    v-model="form.subject" 
                    class="form-control" 
                    :class="{'is-invalid': formErrors.subject}" 
                    required
                />
                <div v-if="formErrors.subject" class="invalid-feedback">
                    Please enter a subject.
                </div>
            </div>

            <!-- Message Input -->
            <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                    id="message" 
                    v-model="form.message" 
                    class="form-control" 
                    rows="5" 
                    :class="{'is-invalid': formErrors.message}" 
                    required
                ></textarea>
                <div v-if="formErrors.message" class="invalid-feedback">
                    Please enter a message.
                </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
  
<script>
export default {
name: 'AppContact',
data() {
    return {
    // Form data
    form: {
        name: '',
        email: '',
        subject: '',
        message: ''
    },
    // Form validation errors
    formErrors: {
        name: false,
        email: false,
        subject: false,
        message: false
    }
    };
},
methods: {
    // Handle form submission
    handleSubmit() {
        // Reset errors
        this.resetErrors();

        // Check if form is valid
        if (this.isFormValid()) {
            // If valid, you can process the form (e.g., send to server)
            alert('Form submitted successfully!');
        } else {
            alert('Please fill out all fields.');
        }
        },

        // Reset form errors
        resetErrors() {
        this.formErrors = {
            name: false,
            email: false,
            subject: false,
            message: false
        };
        },

        // Check if form is valid
        isFormValid() {
        let isValid = true;

        // Check each field
        if (!this.form.name) {
            this.formErrors.name = true;
            isValid = false;
        }
        if (!this.form.email || !this.isValidEmail(this.form.email)) {
            this.formErrors.email = true;
            isValid = false;
        }
        if (!this.form.subject) {
            this.formErrors.subject = true;
            isValid = false;
        }
        if (!this.form.message) {
            this.formErrors.message = true;
            isValid = false;
        }

        return isValid;
    },

    // Basic email validation
    isValidEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
}
};
</script>

<style scoped>
.contact-form-container {
    max-width: 768px;
    margin: 5rem auto 0;
}

.contact-form-container h2 {
    color: #FFFFF0;
}

.form-group {
    margin-bottom: .5rem;
}

label {
    font-weight: 600;
    color: #FFFFF0;
}

.invalid-feedback {
    display: block;
    color: red;
}

button[type="submit"] {
    margin-top: 1rem;
}

.is-invalid {
    border-color: red;
}
</style>
  