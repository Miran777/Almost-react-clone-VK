import {vkLogo} from '../Components/header/vk-logo'
import { notification } from './header/notification'
import { music } from './header/music'
import { menu } from './header/menu'
import { arrow } from './header/arrow'

export const Header = () => {

    return (
    <header className='header'>
        <div className='wrapper'>
            <div className='header-content'>
                <div className='header-content-left'>
                    <a href='/' className='header-logo-href'>
                        {vkLogo()}
                    </a>
                    <div className='header-input-wrap'>
                        <input type='text' placeholder='Поиск' className='header-input' ></input>
                    </div>
                    <a href='#'className='header-item-wrap header-item-hover'>
                        {notification()}
                    </a>
                    <a href='#' className='header-item-wrap header-item-hover'>
                        {music()}
                    </a>
                    <a href='#' className='header-mobile-menu header-item-wrap header-item-hover'>
                        {menu()}
                    </a>
                </div>
                <div className='header-content-right '>
                    <a href='#' className='header-menu-wrap header-item-wrap header-item-hover'>
                        {menu()}
                    </a>
                    <a href='#' className='profile-item header-item-hover'>
                        <div className='header-img-wrap'>
                            <img src={require('../images/camera.png')} alt='camera' className='profile-item-img'></img>
                        </div>
                        <div className='arrow-item'>
                            {arrow()}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </header>
    )
}