const NavigationBar = () => {
    return (`
        <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item  nav-end d-none d-sm-none d-md-block">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>  
    `)
}

export default NavigationBar;