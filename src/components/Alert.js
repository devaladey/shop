function Alert({children, colorValue}) {
    return ( 
        <div className="alert" style={{backgroundColor: colorValue}}>{children}</div>
     );
}

export default Alert;