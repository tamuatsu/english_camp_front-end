import React from 'react';
import logo from '../../images/footer-logo.png';
import insta from '../../images/footer-insta.png';
import counseling from '../../images/counseling-icon.svg';
import login from '../../images/footer-login-icon.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Footer = ({ onRouteChange }) => {
    return (
        <footer className="footer" id="footer">
            <div className="footer__content row spa-be container sp-wi90">
                <div className="footer__content__left">
                <img className="sp mb40" src={logo} alt="" />
                    <div className="row footer__content__left__buttons">
                        <Link to='/counseling'>
                            <div className="row footer__content__left__buttons--button">
                                無料カウンセリング
                            </div>
                        </Link>
                        <Link to='/contact'>
                            <div className="row footer__content__left__buttons--button">
                                お問い合わせ
                            </div>
                        </Link>
                    </div>
                    <div onClick={() => onRouteChange('signin')} className="footer__content__left--login row fle-sta">
                        <img src={login} alt="" />
                        <p>
                            会員ページ ログイン 
                        </p>
                    </div>
                </div>
                <div className="footer__content__right">
                    <ul className="footer__content__right--lists">
                        <Link to='/'>
                            <li className="footer__content__right--lists--list">トップページ</li>
                        </Link>
                        <Link to='/plan'>
                            <li className="footer__content__right--lists--list">EnglishCampとは ?</li>
                        </Link>
                        <Link to='/plan'>
                            <li className="footer__content__right--lists--list">カリキュラム</li>
                        </Link>
                        <Link to='/plan'>
                            <li className="footer__content__right--lists--list">参加費用</li>
                        </Link>
                        <Link to='/voices'>
                            <li className="footer__content__right--lists--list">受講生の声</li>
                        </Link>
                        <Link to='/plan'>
                            <li className="footer__content__right--lists--list">受講までの流れ</li>
                        </Link>
                        <Link to='/counseling'>
                            <li className="footer__content__right--lists--list">無料カウンセリング</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="sp instahref">
                <a href="https://www.instagram.com/english_camp_official/">
                    <img src={insta} alt="" />
                </a>
            </div>
            <div className="footer__content container bg">
                <div className="footer__content__left">
                    <img className="pc" src={logo} alt="" />
                    <ul className="footer__content__left--lists mt0">
                        <Link to='/company'>
                            <li className="footer__content__left--lists--list first">会社概要</li>
                        </Link>
                        <Link to='/specialcommercialcode'>
                            <li className="footer__content__left--lists--list">特定商法</li>
                        </Link>
                        <Link to='/parent'>
                            <li className="footer__content__left--lists--list">保護者の方へ</li>
                        </Link>
                        <Link to='/contact'>
                            <li className="footer__content__left--lists--list last">お問い合わせ</li>
                        </Link>
                    </ul>
                    <p className="footer__content__left--copywright">
                        © 2020 EnglishCamp All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;