import { useDispatch } from "react-redux"
import {updateCode} from "../../features/tabs"
import "./index.scss"

export default function CodeTab({ id, code }) {
    const dispatch = useDispatch()

    function handleChange(e) {
        dispatch(updateCode({id: id, value: e.target.value}))
    }

  return (
    <textarea 
        onChange={(e) => handleChange(e)}
        value={code}
        spellCheck="false"
        className="textarea-code">
    </textarea>
  )
}