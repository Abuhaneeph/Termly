try {
    // Check if the email exists
    const emailCheckResponse = await axios.post('http://localhost:3000/api/checkOrganisationEmailExists', {
      email: formValues.email,
    });
  
    // Assuming the API returns a boolean indicating email existence
    if (emailCheckResponse.data.exists) {
      toast.error('Email already exists');
    } else {
        try {
            setRegistering(true);
      
            // Make the POST request to registerOrganisation endpoint
            const response = await axios.post('http://localhost:3000/api/registerOrganisation', credentials);
      
            if (response.status === 200) {
              // Registration successful
              toast.success(response.data.message);
      
              // Send verification email
              const sendEmailResponse = await axios.post('http://localhost:3000/api/sendEmail', {
                to: formValues.email,
                verification_code: randomDigits,
              });
      
              if (sendEmailResponse.status === 200) {
                // Email sent successfully
                toast.info('Verification email sent successfully');
              } else {
                // Email sending failed
                toast.error('Failed to send verification email');
              }
      
              // Optionally, you can redirect the user to another page or handle it as needed
              // For example, redirect to the dashboard page
              router.push('/dashboard');
            } else {
              // Registration failed
              toast.error(response.data.error || 'Registration failed');
            }
          } catch (error) {
            console.error('Error during registration:', error);
            toast.error('An error occurred during registration');
          } finally {
            setRegistering(false);
          }
        
      
    }
  } catch (emailCheckError) {
    setRegistering(false)
    console.error('Error checking email existence:', emailCheckError);
    toast.error('Error checking email existence');
  }
  