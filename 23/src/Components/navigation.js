import {page} from './navbar/page'
import {news} from './navbar/news'
import {advertisement} from './navbar/advertisement'
import {calls} from './navbar/calls'
import {friends} from './navbar/friends'
import {files} from './navbar/file'
import {clips} from './navbar/clips'
import {photos} from './navbar/photos'
import {sticker} from './navbar/sticker'
import {videos} from './navbar/videos'
import {services} from './navbar/services'
import {musics} from './navbar/musics'
import {pranks} from './navbar/pranks'
import {messages} from './navbar/messages'
import {groups} from './navbar/groups'
import {market} from './navbar/market'
import {bookmarks} from './navbar/bookmarks'
import {games}  from './navbar/games'


export const Navigation = () => {

    return (
        <nav className='navbar'>
            <div className='wrapper'>
                <ul className='navbar-list'>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {page()}
                            <span>Моя страница</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {news()}
                            <span>Новости</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {messages()}
                            <span>Мессенджер</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {calls()}
                            <span>Звонки</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {friends()}
                            <span>Друзья</span>
                        </a>
                    </li>                    
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {groups()}
                            <span>Сообщества</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {photos()}
                            <span>Фотографии</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {musics()}
                            <span>Музыка</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {videos()}
                            <span>Видео</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {clips()}
                            <span>Клипы</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {games()}
                            <span>Игры</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {sticker()}
                            <span>Стикеры</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {market()}
                            <span>Маркет</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {pranks()}
                            <span>Розыгрыш</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {services()}
                            <span>Сервисы</span>
                        </a>
                    </li>
                    <div className='nav-lvl-border-wrap'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <span className='nav-lvl-border'></span>
                    </div>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {bookmarks()}
                            <span>Закладки</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {files()}
                            <span>Сервисы</span>
                        </a>
                    </li>
                    <li className='navbar-list-item'>
                        <div className='navbar-left-menu'>
                            <a className='navbar-left-menu-item'></a>
                        </div>
                        <a href='#' className='list-item-logo-wrap'>
                            {advertisement()}
                            <span>Реклама</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}