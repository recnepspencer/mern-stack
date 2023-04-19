import {useState} from 'react'
import { useDispatch} from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'


function GoalForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()


    const onSubmit = e => {
        e.preventDefault()

        dispatch(createGoal({text}))
        setText('')
    }
  return (
    <section className='form'>
        <form onSubmit={onSubmit}></form>
        <div className="form-group">
            <label htmlFor="text">Goal</label>
            <input type="text" name='text' id='text' value={text} onChange={(e)=> setText(e.target.value)}/>
        </div>
        <div className="form-group">
            <button className="btn btn-block"
            type="submit" onClick={onSubmit}>
                Add Goal
            </button>
        </div>
    </section>
  )
}

export default GoalForm
