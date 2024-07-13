import './task.css'
 function list_header(){
    return(
      <section className="list">
        <div className='total'>
            <p>Total tasks</p>
            <span>10</span>
        </div>
        <div className='cmplt'>
            <p>completed</p>
            <span>1 of 10</span>
        </div>
      </section>
    )
}
export default list_header