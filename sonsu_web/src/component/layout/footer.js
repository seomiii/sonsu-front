import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contents">
                {/* <h2 className='title'>이것은 푸터다.</h2> */}
                {/* <Button variant="outlined" color="disabled"><InstagramIcon /></Button> */}
                <div class="today">
                    TODAY
                    <span class="zero"> 0 </span>
                    | TOTAL
                    <span class="count"> 12345 </span>
                </div>
                <div class="today">
                    전화
                    <span class="zero"> | 01012345678</span>
                </div>
                <div class="today">
                    주소
                    <span class="zero"> | 서울시 도봉구 덕성여자대학교</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer