document.addEventListener('DOMContentLoaded', () => {
    // Form validation & submission
    const form = document.getElementById('reportForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (this.checkValidity()) {
                alert('✅ Report submitted successfully! Thank you for keeping our community clean.');
                this.reset();
            } else {
                alert('Please fill all required fields correctly.');
            }
        });
    }
});