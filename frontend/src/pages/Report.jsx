import React from 'react'

const Report = () => {
  return (
    <div>
      <p>PowerReport</p>
      <h2>Report an Electricity Issue</h2>

      <form action="" method='post' encType=''>
        <label htmlFor="uploads">Upload a Photo</label>
        <input type="file" multiple="multiple" accept='image/jpeg, image/png, image/jpg'/>
      </form>

      <div className='location'>
        <p>Share Your Location</p>
        <map name=""></map>
        <button>Use Current Location</button>
      </div>

      <button type='submit'>Submit Report</button>
    </div>
  )
}

export default Report
