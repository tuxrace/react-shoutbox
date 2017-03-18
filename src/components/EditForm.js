import React from 'react'

const EditForm = ({ main, update, handleMessage, value, show, id, toggleEdit }) => (
  <div>
    {(show && main.active === id) ? <div>
      <input name="message" type="text" size="30" defaultValue={value} onChange={e => handleMessage(e.target.value)} />
      <button className="btn btn-sm" onClick={() => { update(main); toggleEdit(main.active) }}> Save </button>
    </div> : null}
  </div>
)

EditForm.propTypes = {
  main: React.PropTypes.object,
  update: React.PropTypes.func,
  handleMessage: React.PropTypes.func,
  value: React.PropTypes.string,
  show: React.PropTypes.bool,
  id: React.PropTypes.string,
  toggleEdit: React.PropTypes.func
}

export default EditForm
