import './Header.css'

const Header = () => {
  return(
    <header>
      <div>
        회사 로고
      </div>

      <div>
        <ul>
          <li><a href="#">회사소개</a></li>
          <li><a href="#">시공사례</a></li>
          <li><a href="#">시공상담</a></li>
          <li><a href="#">시공후기</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;