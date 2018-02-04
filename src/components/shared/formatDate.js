
export default (unix_timestamp) => {
    let currentDateAndTime  =  new Date(unix_timestamp*1000);
    let year = currentDateAndTime.getFullYear();
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let month = months[currentDateAndTime.getMonth()];
    let date = currentDateAndTime.getDate();
    
    let hours = currentDateAndTime.getHours();
    let minutes = "0" + currentDateAndTime.getMinutes();
    let seconds = "0" + currentDateAndTime.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    return (date + '-' + month + '-' + year + ' ' + formattedTime );

}
