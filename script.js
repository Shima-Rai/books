// Add any JavaScript for interactivity here

// Example: Script to handle modal popup form submission (if needed)
$(document).ready(function() {
    $('#contactModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        var modal = $(this)
        modal.find('.modal-title').text('Contact Us')
        modal.find('.modal-body input').val(recipient)
    })

    $('#contactModal .btn-primary').click(function() {
        // Handle the form submission here
        var name = $('#contact-name').val();
        var email = $('#contact-email').val();
        var message = $('#message-text').val();
        
        // Example: Display an alert with the form data
        alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
        
        // Close the modal
        $('#contactModal').modal('hide');
    });
});