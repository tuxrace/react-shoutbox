import React from 'react'
const {object, func, bool, string } = React.PropTypes

const EditForm = ({ main, update, handleMessage, value, show, id, toggleEdit }) => (
  <div>
    {(show && main.active === id) ? <div>
      <input name="message" type="text" size="30" defaultValue={value} onChange={e => handleMessage(e.target.value)} />
      <button className="btn btn-sm" onClick={() => { update(main); toggleEdit(main.active) }}> Save </button>
    </div> : null}
  </div>
)

EditForm.propTypes = {
  main: object,
  update: func,
  handleMessage: func,
  value: string,
  show: bool,
  id: string,
  toggleEdit: func
}

export default EditForm
