import React from 'react'

function SignUpInfo({ formData, setFormData}) {
  return (
    <div className="sign-up-container">
       <input type="email" placeholder="Email.." value={formData.email} 
       onChange={(event) => setFormData({...formData, email: event.target.value })} />
       <input type="text" placeholder="password.." value={formData.password} 
       onChange={(event) => setFormData({...formData, password: event.target.value })}/>
       <input type="text" placeholder="Confirm password.." value={formData.confirmPassword} 
       onChange={(event) => setFormData({...formData, confirmPassword: event.target.value })}/>
    </div>
  )
}

export default SignUpInfo;