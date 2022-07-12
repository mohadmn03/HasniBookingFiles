import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useNavigate } from "react-router-dom";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./Header.css";         
//
const Header = ({ type }) => {
    const [openDate , setOpenDate] = useState(false);
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
    const [openOptions , setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adults: 1,
        children: 1,
        room: 1,
    })
    //handleOption
    const handleOptions = (name, operation)=>{
        setOptions((prev)=>{
            return {...prev, [name]: operation === "i" ? options[name] +1 : options[name] -1}
            //search about prev state
        })
    }
    //
    const [destiniation, setDestiniation] = useState();
    const navigate = useNavigate(); 
    const handleSearch = () => {
        navigate("/hotels", { state: { destiniation, date, options } });
    }
  return (
   <div className="header">
    <div className={type === "list" ? 'headerContainer listMode' : 'headerContainer'}>
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport Taxis</span>
            </div>
        </div>
        {type !== "list" &&<>
        <h1 className="headerTitle">A life time of discounts? It's Genius.</h1>
        <p className="headerDesc">Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account</p>
        <button className="headerBtn">Sign In / Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                          <input type="text" placeholder='where are you going ?' className='headerSearchInput' onChange={(event) => { setDestiniation(event.target.value) }} />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" onClick={()=>{
                    setOpenDate(!openDate);
                }} />
                <span className='headerSearchText' onClick={()=>{setOpenDate(!openDate)}}>
                {`${format(date[0].startDate, "MM/dd/yyyy")}
                 to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
                className="date"
                />}
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span className='headerSearchText' onClick={()=>{setOpenOptions(!openOptions)}}>{`${options.adults} adult • ${options.children} children • ${options.room} room`}</span>
                {openOptions && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                            <button disabled={options.adults <= 1} className="optionCounterButton" onClick={()=>{handleOptions("adults", "d")}}>-</button>
                            <span className="optionCounterNumber">{options.adults}</span>
                            <button className="optionCounterButton" onClick={()=>{handleOptions("adults", "i")}}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                            <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=>{handleOptions("children", "d")}}>-</button>
                            <span className="optionCounterNumber">{options.children}</span>
                            <button className="optionCounterButton" onClick={()=>{handleOptions("children", "i")}}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                            <button disabled={options.room <= 1} className="optionCounterButton"  onClick={()=>{handleOptions("room", "d")}}>-</button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button className="optionCounterButton"  onClick={()=>{handleOptions("room", "i")}}>+</button>
                        </div>
                    </div>
                </div>}
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn" onClick={()=>{handleSearch()}}>Search</button>
            </div>
        </div>
        </>}
    </div>
   </div> 
  )
}

export default Header