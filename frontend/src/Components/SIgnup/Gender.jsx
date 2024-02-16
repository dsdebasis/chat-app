function Gender({onCheck,slctGender}){
  return (
    <div className="flex">
    <div className="form-control">
      <label className={`cursor-pointer label ${slctGender ==="male" ? "selected":""}`}>
        <span className="label-text text-white inline-block mx-2">Male  </span>
        <input type="checkbox"  className="checkbox checkbox-primary" checked={slctGender === "male"} onChange={()=>onCheck("male")}/>
      </label>
    </div>
    <div className="form-control">
      <label className={`cursor-pointer label ${slctGender ==="male" ? "selected":""}`}>
        <span className="label-text text-white inline-block mx-2">Female </span>
        <input type="checkbox"  className="checkbox checkbox-primary" checked={slctGender==="female"} onChange={()=>onCheck("female")} />
      </label>
    </div>
  </div>

  )
}

export default Gender;