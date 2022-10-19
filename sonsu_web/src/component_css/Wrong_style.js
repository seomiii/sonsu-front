import styled from 'styled-components';

// -------------------------- wrong.js -------------------------------

export const WrongDiv=styled.div`
    // width: 290px;
    // height: 164px;
    margin: 25px;
`

export const WrongTitle=styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    // align-items: center;
    // justify-content: center;
    font-size: 20px;
    // font-weight: bold;
    margin-left: 50px;
`

export const YearDiv=styled.div`
    margin-top: 20px;
    font-size: 22px;
`

export const MonthDiv=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 40px 50px;
`

export const Month=styled.div`
    // backgroundColor: isActive ? 'salmon' : '',
    // color: isActive ? 'white' : 'black',
    // color: black;
    &:active{
        color:#FF7A00;
        // background-color:white;
        // border:1px solid #FF7A00;
    }
    &:hover{
        color:#FF7A00;
        // background-color:white;
        // border:1px solid #FF7A00;
    }
`

export const WrongContent=styled.div`
    // width: 290px;
    // height: 164px;
    margin: 25px;
`

export const WrongList=styled.div`
    // width: 290px;
    // height: 164px;
    // margin: 10px;
`

export const WrongListContent=styled.div`
    // width: 290px;
    // height: 164px;
    // margin: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom : solid 3px #D9D9D9;
`

export const WrongDay=styled.div`
    // width: 290px;
    // height: 164px;
    margin: 25px;
`

export const WrongBtn=styled.div`
    // width: 290px;
    // height: 164px;
    width: 100px;
    height: 100px;
    margin: 25px;
    border-radius: 50%;
    background-color: #D9D9D9;
    border:2px solid #D9D9D9;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    &:hover{
        color: black;
        background-color:white;
        border:2px solid #FF7A00;
    }
`


// ----------------------- wrong_repeat.js ---------------------------

export const WrongText=styled.div`
    // width: 290px;
    // height: 164px;
    margin-left: 10px;
`

export const WrongHeader=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WrongLevelName=styled.div`
    font-size: 25px;
`

export const WrongDate=styled.div`
    // width: 290px;
    // height: 164px;
    margin: 25px;
    color: #FF7A00;
    border: solid 2px #FF7A00;
    border-radius: 50px;
    padding: 5px 40px;
    // width: 300px;
`

export const WrongReapeatTitle=styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`

export const WrongReapeatNumber=styled.div`
    font-size: 20px;
    margin-left: 10px;
`

export const WrongReapeat=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 40px;
    background-color: #F9F9F9;
    border: solid 1px #D9D9D9;
    border-radius: 12px;
    padding: 40px;
`

export const WrongReapeatContent=styled.div`
    background-color: white;
    border-radius: 12px;
    padding: 20px 20px 40px;
    box-shadow: 2px 4px 100px -70px;
`

export const WrongSome=styled.div`

`

export const WrongWordName=styled.div`
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: start;
`

export const WrongStartBtn=styled.button`
    margin-top: 50px;
    border-radius: 50px;
    border: none;
    background-color: #FF7A00;
    color: white;
    padding: 5px 40px;
    border: 1px solid #FF7A00;

    transition: 0.4s;
    &:hover{
        color:#FF7A00;
        background-color:white;
        border:1px solid #FF7A00;
    }
`

