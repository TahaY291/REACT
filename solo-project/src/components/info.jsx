import info from '../image/info.jpg'
export default function Info() {
    return (
        <header>
            <img src={info} alt="" />
            <h1>Sun Flower</h1>
            <h3>Front-End Developer</h3>
            <p>Sun Flower Website</p>
            <div className='btn-cont'> 
                <button className='btnF'><i class="fa-solid fa-envelope"></i> Email </button>
                <button className='btnS'><i class="fa-brands fa-linkedin"></i> LinkedIn </button>
            </div>
        </header>
    )
}