import React from 'react'

const EditForm = ({ main, update, handleMessage, value, show, active, id, toggleEdit }) => (
  <div>
    { (show && active === id) ? <div>
      <input name="message" type="text" size="30" defaultValue={value} onChange={ e => handleMessage(e.target.value)} />
    <button className="btn btn-sm" onClick={() => {update(main); toggleEdit(main.active)} }> Save </button>
    </div> : null}
  </div>
)

export default EditForm
