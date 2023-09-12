import React from 'react'

export default function Alerting(props) {
  return (
    props.alert &&  
    <>
     <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
            <strong>{props.alert.ty} : </strong>{props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        </div>
    </>
   
  )
}
