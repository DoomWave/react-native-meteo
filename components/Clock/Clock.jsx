import { nowToHHM } from "../../utils/date-time"
import { Txt } from "../Txt/Txt"
import { s } from "./Clock.style"
export function Clock(){
    return (
    <>
      <Txt>{nowToHHM()}</Txt>
    </>)
}