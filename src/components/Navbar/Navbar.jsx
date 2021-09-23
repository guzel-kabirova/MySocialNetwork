import classes from './Navbar.module.css';
import NavbarItem from './Navbar-item/Navbar-item';
import profile from '../../svg/profile.svg';
import dialogs from '../../svg/message.svg';
import users from '../../svg/users.svg';
import news from '../../svg/news.svg';
import music from '../../svg/music.svg';
import settings from '../../svg/settings.svg';


const Navbar = () => {
    return (
            <nav className={classes.nav}>
                <div>
                    <NavbarItem name="Профиль" icon={profile} linkto="/profile"/>
                    <NavbarItem name="Сообщения" icon={dialogs} linkto="/dialogs"/>
                    <NavbarItem name="Все пользователи" icon={users} linkto="/users"/>
                    <NavbarItem name="Новости" icon={news} linkto="/news"/>
                    <NavbarItem name="Музыка" icon={music} linkto="/music"/>
                </div>
                <NavbarItem name="Настройки" icon={settings} linkto="/settings"/>
            </nav>
    );
};

export default Navbar;