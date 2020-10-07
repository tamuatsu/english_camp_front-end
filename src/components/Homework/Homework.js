import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lesson1 from '../../images/lesson1.jpg';
import lesson12 from '../../images/lesson12.jpg';
import lesson14 from '../../images/lesson14.jpg';
import up from '../../images/up.svg';
import c21 from '../../images/c21.jpg';
import c22 from '../../images/c22.jpg';
import b11 from '../../images/B11.jpg';
import c23 from '../../images/c23.jpg';
import c24 from '../../images/c24.jpg';
import c13 from '../../images/c13.jpg';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toggle from '../Parts/Toggle';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../First/First.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


  function Home() {
       const classes = useStyles();
      return (
          <div>
              <h1>English Camp</h1>
              <h2>レッスン教材</h2>
              <img src={lesson1} alt="" />
          </div>
      );
    }
    function C11() {
         const classes = useStyles();
        return (
            <div>
              <h1>C1-1自己紹介をマスターする</h1>
              <h2>Goal 目標</h2>
              <p>To become able to introduce yourself<br />簡単な自己紹介ができるようになること</p>
              <img src={lesson1} alt="" />
            　<h2>Expression 重要表現</h2>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel1a-content" id="panel1a-header" className="work__question"><Typography className={classes.heading}>①わたしの名前は〜です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">My name is ~/ I'm ~<br /><br />I'm Ken. （わたしはケンです）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel2a-content" id="panel2a-header" className="work__question"><Typography className={classes.heading}>②わたしは〜歳です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I was born in ~<br /><br />I'm 20 years old. （わたしは２０歳です）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel3a-content" id="panel3a-header" className="work__question"><Typography className={classes.heading}>③わたしは〜で生まれました</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">My name is ~/ I'm ~<br /><br />I was born in Osaka （わたしは大阪で生まれました）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel4a-content" id="panel4a-header" className="work__question"><Typography className={classes.heading}>④わたしは〜出身です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I'm from ~<br /><br />I'm from Hokkaido.（わたしは北海道出身です。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑤わたしは〜で育ちました</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I grew up / was raised / was brought up in ~<br /><br />I grew up in Tokyo. （わたしは東京で育ちました）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑥わたしは〜に住んでいます</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I live in ~<br /><br />I live in Nagoya. （わたしは名古屋に住んでいます）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑦わたしは学生です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I'm a student.</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑧わたしは〜大学に通っています</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I go to ~ universty<br /><br />I go to ABC university. （わたしはABC大学に通っています。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑨わたしは大学１年生です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I'm a first year university student / I'm a freashman.<br /><br />他の学年は以下のように表現します。<br />second year(2年の)/ third year(3年の)/forth year(4年の)/  sophomore(2年生) / junior(3年生)/ senior(4年生)</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑩わたしは〜を専攻しています</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I major in ~ / My major is ~<br /><br />I major in economics. （わたしは経済学を専攻しています）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑪わたしは〜で働いています</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I work at 場所名<br /><br />I work at an izakaya. （わたしは居酒屋で働いています））</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑫わたしは〜として働いています</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I'm 職業名 / I work as 職業名<br /><br />I'm a nurse. （わたしは看護師です）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑬わたしは〜で働いています</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I work for 会社名・場所名<br /><br />I work for an IT company. （わたしはIT企業に勤めています）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑭わたしの趣味は〜です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">My hobby is ~<br /><br />My hobby is handicraft. （わたしの趣味はハンドクラフトです）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑮わたしは〜するのが好きです</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I like ~ing<br /><br />I like watching movies. （わたしは映画を見るのが好きです）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑯わたしは〜にハマっています</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I'm into ~/ ~ing<br /><br />I'm into cooking. （わたしは料理にハマっています）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑰好きな〜は…です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">My favorite ~ is ...<br /><br />My favorite food is okonomiyaki. （わたしの好きな食べ物はお好み焼きです）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑱わたしは〜がしたいので、英語を勉強しています</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I study English because I want to do ~<br /><br />I study English because I want to work abroad in the future. （わたしは将来海外で働きたいので、英語を勉強しています）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <a href="https://drive.google.com/file/d/1Ra2jVGZC2UlDQm1QrvBQFxeogonlM2Ra/view" target="_blank">
                音声はこちらから
            </a>
            <h2>
                Read ＆ Listen 読む・聞く 
            </h2>
            <div className="listening">
                <a href="https://drive.google.com/file/d/1600o-3e9UATDH7QJjNnPgkirl7j550T7/view" target="_blank">
                    ①の音声はこちらから
                </a>
                <h3>①</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p>Iʼm Hana. I was born in Okinawa, <br />
                    but grew up in Osaka.<br /> Iʼm a first year university student.<br />
                    I major in politics.<br /> I work part-time at a cafe.<br /> I like reading books, especially novels.<br />
                    My favorite novel is “I am a Cat”. <br />I study English because I want to study abroad next year.</p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p>私はハナです。<br />私は沖縄で生まれましたが、大阪で育ちました。<br />私は大学1年生です。<br />政治学を専攻しています。<br />カフェでアルバイトをしています。<br />私は、本を読むのが好きで、特に小説が好きです。<br />お気に入りの本は、「吾輩は猫である」です。<br />私は来年留学したいので、英語を勉強しています。</p></p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="listening">
                <a href="https://drive.google.com/file/d/1_biB6PsN2ZN9Rk6YnZYm5kvezNJHhZPO/view" target="_blank">
                    ②の音声はこちらから
                </a>
                <h3>②</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p>Iʼm John.<br /> I come from Sydney, Australia. <br />Iʼm an engineer.<br /> Iʼm totally into playing video games lately.<br /> And also I like sports.<br /> I play soccer on weekends.</p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p>私はジョンです。<br />オーストラリアのシドニー出身です。<br />エンジニアをしています。<br />私は、最近ゲームをすることにすっかりはまっています。<br />またスポーツも好きです。週末はサッカーをしています。</p></p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="listening">
                <a href="https://drive.google.com/file/d/10NGGDuI9HsJMpSUA0ZhJGYxxtnwlR6Xx/view" target="_blank">
                    ③の音声はこちらから
                </a>
                <h3>③</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p>Lisa: Hello!<br />
                    <br />
                    Taro: Hi!<br />
                    <br />
                    Lisa: Iʼm Lisa. Whatʼs your name?<br />
                    <br />
                    Taro: My name is Taro.<br />
                    <br />
                    Lisa: Nice to meet you, Taro.<br />
                    <br />
                    Taro: Nice to meet you too.<br />
                    <br />
                    Lisa: So, how are you today?<br />
                    <br />
                    Taro: Iʼm great. How about you?<br />
                    <br />
                    Lisa: Iʼm good, thanks. So, where do you live?<br />
                    <br />
                    Taro: I live in Osaka.<br />
                    <br />
                    Lisa: Nice! What do you do?<br />

                    Taro: Iʼm a student. I study business management.<br />
                    <br />
                    Lisa: Oh, okay.<br /> So, in your free time, what do you like to do?<br />
                    <br />
                    Taro: My hobby is reading.<br />
                    <br />
                    Lisa: I like reading too! What else?<br />

                    Taro: I also like camping and playing basketball.<br />
                    <br />
                    Lisa: Nice! Now, tell me more about yourself.<br />
                    <br />
                    Taro: I live with my parents. Iʼm an only child.<br /></p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p>リサ：こんにちは。<br />
                    タロウ：やぁ。<br />
                    リサ：私はリサです。あなたの名前は?<br />
                    タロウ：私の名前はタロウです。<br />
                    リサ：はじめまして、タロウさん。<br />
                    タロウ：こちらこそ、はじめまして。<br />
                    リサ：それで、元気ですか?<br />
                    タロウ：とても元気です。あなたはどうですか?<br />
                    リサ：元気です。ありがとう。それで、あなたはどこに住んでいますか。<br />
                    タロウ：私は大阪に住んでいます。<br />
                    リサ：いいですね、お仕事は何ですか?<br />
                    タロウ：学生です。経営管理学を専攻しています。<br />
                    リサ：なるほど。それで、自由な時間がある時、何をするのが好きですか?<br />
                    タロウ：趣味は読書です。<br />
                    リサ：私も読書が好きです。他には何かありますか?<br />
                    タロウ：キャンプとバスケットボールが好きです。<br />
                    リサ：いいですね!では、なにか他にあなたの事について教えてください。<br />
                    タロウ：両親と一緒に住んでいます。一人っ子です。<br />
                </p></p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <h2>
                Write ＆ Speak 書く・話す
            </h2>
            <div className="writing">
                <h3>①Answer the questions below.</h3>
                <p>下の質問に答えてみましょう。<br /><br /><br /><br /><br /></p>
                <p>Whatʼs your name? (名前は何ですか?)<br />
                <br />
                Where are you from? (出身はどこですか?)<br />

                Where do you live? (どこに住んでいますか?)<br />
                <br />
                What do you do?(普段何をされていますか?)<br />
                <br />
                ※なるべく詳細に書いてみましょう。<br />
                <br />
                What do you do in your free time?(趣味は何ですか?)<br />
                <br />
                ※3つ書いてみましょう。<br />
                <br />
                Why do you study English?(なぜ、英語を勉強しているんですか?)<br />
                <br />
                Tell me more about yourself. (あなたのことについてもっと話してください)<br />
                <br />
                ※実際に英語で自己紹介する時に、付け加えたいことを3つ以上書いてみましょう。</p>
            </div>
            <div className="writing">
                <h3>②Have an interview</h3>
                <p>友達、家族のうち３人に日本語でインタビューをしましょう。<br />上の1~7の質問に英語で答えてみましょう。<br /> ※全ての文は「I」からはじめましょう。</p>
            </div>
            <div className="writing">
                <h3>＋α Google famous people who you like</h3>
                <p>あなたが好きな有名人を日本語で調べて、その人になりきって自己紹介をしてみましょう。</p>
            </div>
          </div>
      );
  }
    function C12() {
         const classes = useStyles();
        return (
            <div>
              <h1>C1-2 日々の習慣</h1>
              <h2>Goal 目標</h2>
              <p>To become able to talk about your routine<br />自分のルーティンについて話せるようになること</p>
              <img src={lesson12} alt="" />
            　<h2>Expression 重要表現</h2>
                <a href="https://drive.google.com/file/d/1B33jmupIER-0WJ1J80hCoOTNc7kdIWrZ/view" target="_blank">音声はこちら</a>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>①〜時に起きます</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I wake up/ get up at 時間<br /><br />I wake up at 7. （わたしは７時に起きます）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>②起きたあと〜する</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">After I wake up, I do~<br /><br />After I wake up, I wash my face and blush my teeth. （わたしは朝起きたあと、顔を洗い歯を磨きます）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>③毎朝〜します</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I do ~ every morning<br /><br />I study English every morning. （私は毎朝英語の勉強をします）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>④朝に〜する</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I'm from ~<br /><br />I'm Ken. （わたしはケンです）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑤わたしは普段朝ごはんに〜を食べます</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I usually eat ~ for breakfast<br /><br />I usually eat cereal for breakfast. （私は普段朝ごはんにシリアルを食べます）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑥私は〜時に家を出ます</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I leave home at 時間<br /><br />I leave home at 8. （私は８時に家を出ます）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑦わたしは〜で学校・仕事に行きます</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I go to school/ work by 交通手段<br /><br />I go to school by train. （私は電車で学校に行きます）<br />※他の交通手段を表す表現も覚えておきましょう。<br />on foot （徒歩で）, walk to 場所 （歩いて〜に行く）, drive to 場所 （車で〜に行く）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑧家から職場・学校までに電車で〜かかります</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">It takes me 時間 by train to get from my house to my work/ school<br /><br />It takes me an hour by car to get from my house to work. （家から職場までに車で１時間かかります）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑨通学中・通勤中</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">on my way to school / work<br /><br />I listen to music on my way to school. （わたしは通学中に音楽を聞きます）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑩…から〜し始める</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">  I start to do ~ from 時間<br /><br />I start to work from 9. （私は９時から仕事をし始める）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑪…まで〜する</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">do ~ until ...<br /><br />I work until 8pm. （私は８時まで働く）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑫仕事・学校の後</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">after work / school<br /><br />I go to the gym after work. （私は仕事後にジムに行きます）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑬帰り道に・で</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">on my way home<br /><br />I go shopping on my way home. （私は帰宅途中にショッピングします）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑭家に帰ったら</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">when I get home<br /><br />When I get home, I take a shower frist. （私は家に帰ると、まずシャワーを浴びます）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑮寝る前に</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">before I go to bed/ before I sleep<br /><br />I read a book before I go to bed. （私は寝る前に読書をします）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑯~時に寝ます</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I go to bed at 時間<br /><br /> I go to bed at 11. （私は１１時に寝ます）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑰〜曜日に</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">on 曜日<br /><br />I go to an English school on Monday. （私は月曜日に英語学校に行きます）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑱週末は</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">on weekends<br /><br />I usually sleep until 12 on weekends. （私は週末は普段１２時まで寝ている）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑱毎週〜曜日に</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">every 曜日<br /><br />I go for a drink with my friends every Friday. （毎週金曜日に友達と飲みに行きます）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <h2>
                Read ＆ Listen 読む・聞く 
            </h2>
            <a href="https://drive.google.com/file/d/1c1D0yK1F95j6dz4lZ6_cJN4iFD9ikmCJ/view" target="_blank">
                音声はこちらから
            </a>
            <div className="listening">
                <h3>①</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p>I wake up at 6 o’clock. <br /> I make a cup of tea and iron my clothes.<br /> I have a shower and get dressed.<br /> I usually wear jeans, a blouse, a jumper or cardigan and boots in the winter, or a skirt and blouse in the summer. <br />I brush my hair, put on my make-up.<br /> I pack my bag with all my teaching materials. <br />I then put on my coat and leave the house.<br /> I walk to the bus stop. <br />I catch the bus at 8.15, and then I pay my fare and sit down.<br /> It takes about 45 minutes to get to my destination three miles away.<br /> I get off the bus and walk to the school where I teach English.<br /> I have to sign in and get the key. <br />Class starts at 9.25 and ends at 11.25.</p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p>私は６時に目を覚まします。<br />ティーをつくって、服をアイロンします。<br />シャワーを浴びて、着替えます。<br />普段、冬にはジーンズ、ブラウスとジャンパーかカーディガンとブーツを履いて、夏にはスカートとブラウスを着ます。<br />髪をといて、化粧をします。<br />私の教材全てをバックに詰めます。<br />それからコートを着て、家を出発します。<br />バス停まで歩いて、８時１５分にバスに乗ります。<br />そして、運賃を払い座ります。<br />３マイル先の到着地につくまで約４５分かかります。<br />バスを降りて、私が英語を教えている学校まで歩いて行きます。<br />私はサインインして、鍵を受け取らなければいけません。<br />授業は９時２５分に始まり、１１時２５分に終わります。</p></p> </Typography></AccordionDetails>
                </Accordion>
                <a href="https://drive.google.com/file/d/1kq3y5TiPqvX4inwjiwJDAIOW8sX-92tG/view" target="_blank">
                    音声はこちらから
                </a>
            </div>
            <div className="listening">
                <a href="https://drive.google.com/file/d/1_biB6PsN2ZN9Rk6YnZYm5kvezNJHhZPO/view" target="_blank">
                    ②の音声はこちらから
                </a>
                <h3>②</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p>
                    Teacher: What do you do in the morning, Arisa?<br/>
                    <br/>
                    Arisa: I wake up and I go to work. How about you, Ms. Smith? What do you do in the morning?<br/>
                    <br/>
                    Teacher : I wake up and I have breakfast.<br/>
                    <br/>
                    Arisa: When do you go to work?<br/>
                    <br/>
                    Teacher: I go to work in the afternoon. When do you go home?<br/>
                    <br/>
                    Arisa: I go home in the afternoon. When do you go home?<br/>
                    <br/>
                    Teacher: I go home in the evening.<br/>
                    <br/>
                    Arisa: Really? I watch TV in the evening. What do you do?<br/>
                    <br/>
                    Teacher: I don't watch TV. I have dinner and I go to bed.
                </p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p>先生：あなたは朝、何をするの、アリサ？<br />
                    アリサ：私は起きて仕事に行きます。 あなたはどうですか、スミス先生？ 先生は朝、何をしますか？<br />
                    先生：私は起きて、朝ご飯を食べるよ。<br />
                    アリサ：先生はいつ仕事に行きますか。<br />
                    先生：私は午後に仕事に行くの。 あなたはいつ家に帰るの？<br />
                    アリサ：私は午後に家に帰ります。 先生はいつ家に帰りますか。<br />
                    先生：私は夕方、家に帰る。<br />
                    アリサ：本当ですか？ 私は夕方、テレビを見ます。 先生は何をしますか。<br />
                    先生：私はテレビは見ないの。 晩ご飯を食べて、寝ます。</p></p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="listening">
                <a href="https://drive.google.com/file/d/1zWYVqhVphKOMewmioT3VFD8xwAzFua12/view" target="_blank">
                    音声はこちらから
                </a>
                <h3>③</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p>Teacher: Hello, Tom. What do you do on Monday?<br/>
                    <br/>
                    Tom: I go to work on Monday.<br/>
                    <br/>
                    Teacher: What do you do on Tuesday?<br/>
                    <br/>
                    Tom: I don't go to work on Tuesday. I play sports.<br/>
                    <br/>
                    Teacher: What do you do on Wednesday?<br/>
                    <br/>
                    Tom: I go to work and see friends. How about you? What do you do on Wednesday?<br/>
                    <br/>
                    Teacher: I go to work on Wednesday, Thursday and Friday.<br/>
                    <br/>
                    Tom: When do you relax?<br/>
                    <br/>
                    Teacher: I relax on Saturday and Sunday. How about you?<br/>
                    <br/>
                    Tom: Me too.<br/>
                </p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p>先生：こんにちは、トム。 君は月曜日に何をするの？<br />
                    トム：私は月曜日に仕事に行きます。<br />
                    先生：火曜日には何をする？<br />
                    トム：私は火曜日は仕事に行きません。 スポーツをします。<br />
                    先生：水曜日は何をする？<br />
                    トム：仕事に行って、友達に会います。 先生はどうですか？ 水曜日に何をしますか。<br />
                    先生：私は水曜日、木曜日、金曜日に仕事に行くんだ。<br />
                    トム：いつのんびりするんですか？<br />
                    先生：土曜日と日曜日にのんびりする。 君はどう？<br />
                    トム：私もです。
                </p></p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <h2>
                Write ＆ Speak 書く・話す
            </h2>
            <h3>①Answer the questions below.</h3>
            <div className="writing">
                <p>下の質問に答えてみましょう。<br /><br /><br /></p>
                <p>What time do you usually wake up and go to bed?（普段何時に起して何時に寝ますか？）<br />
                <br />
                    What do you usually do after you wake up first?（起きた後、普段まず何をしますか？）<br />
                    <br />
                    What do you usually eat for breakfast?（普段朝ごはんには何を食べますか？）<br />
                    <br />
                    Tell me about three things that you usually do in the morning.（あなたが普段朝にすることを３つ教えてください）<br />
                    <br />
                    What time do you usually leave home?（普段何時に家を出ますか？）<br />
                    <br />
                    How do you get to work/ school?（どうやって通勤/通学していますか？）<br />
                    <br />
                    What do you usually do on your way to work/school?（通勤/通学途中に普段何をしていますか？）<br />
                    <br />
                    How long does it take to get from your house to work/school?（通勤/通学にどれくらいの時間がかかりますか？）<br />
                    <br />
                    What do you usually do after work/ school?（仕事/学校の後に普段何をしますか？）<br />
                    <br />
                    Tell me about three things that you usually do after you get home?（あなたが普段帰宅後にすること３つ教えてください）
            </p>
            </div>
            <div className="writing">
                <h3>②Talk about your routine</h3>
                <p>
                    あなたが休日にすることについて最低５つ英語で書いてみましょう。<br />
                    あなたにとって理想の１日にすることについて最低５つ英語で書いてみましょう。
                </p>
            </div>
            <div className="writing">
                <h3>+α Further questions about your routine</h3>
                <p>
                    1 Do you have any bad habit? And what it that? （あなたは悪い癖がありますか？それは、何ですか？）<br />
                <br />
                    2 Is there anything you do only once a year? And what is that?（一年に一度しかしないことはありますか？それは何ですか？）<br />
                    <br />
                    3 What are some good habits that you have?（あなたの良い癖は何ですか？）<br />
                    <br />
                    4 What do you want to change about your daily routine? （あなたが日々のルーティンで変えたいことは何ですか？）<br />
                    <br />
                    5 What’s your weekly routine like? （あなたの週のルーティンはどんな感じですか？）</p>
            </div>
          </div>
      );
  }
    function C13() {
         const classes = useStyles();
        return (
            <div className={classes.root}>
              <h1>C1-3 故郷</h1>
              <h2>Goal 目標</h2>
              <p>To become able to talk about your hometown<br />故郷について話せるようになること</p>
              <img src={c13} alt="" />
            　<h2>Expression 重要表現</h2>
                <a href="https://drive.google.com/file/d/1B33jmupIER-0WJ1J80hCoOTNc7kdIWrZ/view" target="_blank">音声はこちら</a>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>①私は〜出身です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I’m from 場所名<br /><br />I’m from Tokyo. （私は東京出身です。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>②私の故郷は〜です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">My hometown is 〜<br /><br />My hometown is Osaka. （私の故郷は大阪です。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>③日本の西部に位置する</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">is located in the western part of Japan<br /><br />Osaka is located in the western part of japan.（大阪は日本の西部に位置する）<br />v※他の方角を表したいときは下の単語を使いましょう。eastern（東の）/ northern（北の）/ sputhern（南の）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>④〜の隣にあります</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">is next to 〜<br /><br /> Saitama is next to Tokyo.（埼玉は東京の隣にあります。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑤〜歳までそこに住んでいました</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I lived there until I was 〜 years old.<br /><br />I lived there until I was 18 years old.（私は１８歳までそこに住んでいきました。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑥〜で有名である</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">is famous for 〜<br /><br />My town is famous for gyoza. （私の街は餃子で有名です。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑦栄えている/ 活気のある/ 面白い街</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">a big/ busy/ interesting city<br /><br />Shinjuku is a big and busy city. (新宿は栄えていて、活気のある街です。)<br /></p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑧小さな街/ 静かな街/ 田舎だ</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">a small city/ a quiet city/ a rural area<br /><br />I lived in a rural area.（私は田舎に住んでいました。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑨私の故郷には〜があります</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">There is/ are 〜 in my city.<br /><br />There is a movie theater in my city. （私の街には映画館があります。）<br />※「〜」の部分に入るものが、複数のものの場合は、「There are」を使い、「〜」の部分に入るものが、単数（１つ）のものの場合は、「There is」を使います。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑪【場所】には〜があります</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">  【場所】 has 〜<br /><br />Osaka has many okonomiyaki restaurants.（大阪には沢山のお好み焼き屋さんがあります。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑫私の街では、【時期】に【行事】があります</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">In my city, we have  【行事】in 【時期】<br /><br />In my city, we have a special festival in summer.（私の街では、夏に特別なお祭りがあります。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑬私は私の街が好きです/好きではありません。なぜなら〜</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I like/ don’t like my city because ~<br /><br />I like my city because the people are very kind. （私は私の街が好きです。なぜなら、人が優しいからです。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑬帰り道に・で</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">on my way home<br /><br />I go shopping on my way home. （私は帰宅途中にショッピングします）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑭かつて私は〜をしていた</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I used to do~<br /><br /> I used to play in the park. （私はかつてその公園で遊んでいました。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑮私はあなたが故郷を訪れた際に、〜するのをおススメする</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I recommend that you do~ when you visit my hometown.<br /><br /> I recommend that you go to the shopping mall when you visit my hometown.（私はあなたが故郷を訪れた際に、ショッピングモールに行くのをオススメする。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑯そこでは〜できます</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">You can do ~ there. <br /><br /> You can eat local food there. （あなたはそこで現地の食べ物を食べることができます。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑰あなたは〜を楽しむことができる</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">You can enjoy ~ ing<br /><br />You can enjoy shopping there. （あなたはそこでショッピングを楽しむことができます。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <h2>
                Read ＆ Listen 読む・聞く 
            </h2>
            <a href="https://drive.google.com/file/d/1-OCSx1a8yffFj81VP3P93l8TLx6TYgoh/view" target="_blank">
                音声はこちらから
            </a>
            <div className="listening">
                <h3>①</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">There is a swimming pool in my hometown and many people go there. <br />Whenever I go there, it always seems very busy.<br /> I try to go early in the morning to avoid all the crowds.<br/>The pool is really nice and clean.<br /> There is an area for the serious swimmers<br /> to swim in laps and then there is an area for people and <br />children who just want to lounge around in the water and cool off a little bit.</p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">私の故郷にはスイミングプールがあり、沢山の人がそこに行きます。<br />いつ行っても、常にとても混んでいるみたいです。<br />人混みを避けるために私は朝早くに行くようにしています。<br />プールはとても素敵で綺麗です。<br />真剣に泳ぎたい人が往復で泳ぐエリアもあり、ただ水の中でダラダラしたかったり、少し涼みたい人や子どものためのエリアもあります。</p></p> </Typography></AccordionDetails>
                </Accordion>
                <a href="https://drive.google.com/file/d/1eqUFU7obx0r3OOI8zoB4RKV_x4A9zVuX/view" target="_blank">
                    音声はこちらから
                </a>
            </div>
            <div className="listening">
                <a href="https://drive.google.com/file/d/1_biB6PsN2ZN9Rk6YnZYm5kvezNJHhZPO/view" target="_blank">
                    ②の音声はこちらから
                </a>
                <h3>②</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english"><p className="listening__english">
                    There’s a shopping centre in the middle of my hometown.<br /> It’s kind of boring but me and my friends go there because it’s the only place for us to go on a Saturday evening.<br />One time we went there, and they had a little show in the middle of the centre.<br /> Some local singers who sing in a choir were doing a performance.<br /> I think they were trying to raise money for a local charity.
                </p></p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">私の故郷の中心には、ショッピングセンターがあります。<br />それは、ちょっとつまらないけど、私と友達はそこに行きます。<br />土曜日の夕方に行く唯一の場所なので。<br />ある時、私たちはそこに行き、施設の中心で小さいショーをやっていました。<br />合唱団の中で歌う地元の歌手何人かがパフォーマンスを行なっていました。<br />彼らは、地元の慈善団体のためにお金を集めようとしていたんだと思います。</p></p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="listening">
                <a href="https://drive.google.com/file/d/1zSA3eE69u1eCyX9ruYpGj9SKTnbxmfPn/view" target="_blank">
                    音声はこちらから
                </a>
                <h3>③</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">Tom:	Lisa, where is your hometown?<br />
                <br />
Lisa: I am from Los Angeles, but I live in San Francisco now. Have you been to LA?<br />
<br />
Tom:	Of course. Why did you move from LA to SF?<br />
<br />
Lisa:	I moved because I got a job in SF.<br />
<br />
Tom:	I see. What is your hometown like?<br />
<br />
Lisa:	It is in the suburbs just outside of LA. It’s a small town but it is famous for its beach.<br />
<br />
Tom:	That sounds very nice!<br />
<br />
Lisa:	Let me know when you visit LA. You can stay at my place.<br />
<br />
Tom:	Thanks! That’s very kind of you.<br />
<br />
Lisa:	There isn’t much to show you around, but it will be fun to hang out with you in a different city!
                </p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="listening__japanese">トム: リサ、あなたの故郷はどこ？<br />
                <br />
リサ: 私はロサンゼルス出身だけど、今はサンフランシスコに住んでいるよ。ロサンゼルスに行ったことはある？<br />
<br />
トム: もちろん。何でロサンゼルスからサンフランシスコに引っ越したの？<br />
<br />
リサ: サンフランシスコで仕事を得たから引っ越したの。<br />
<br />
トム: なるほど、故郷はどんな感じ？<br />
<br />
リサ: ロサンゼルスのちょうど外れた郊外にある。小さな町だけど、ビーチで有名だよ。<br />
<br />
トム: いいねぇ。<br />
<br />
リサ: ロサンゼルスを訪れたら、教えてよ。私の家に泊まれるよ。<br />
<br />
トム: ありがとう。優しいね。<br />
<br />
リサ: 案内できるもの多くないけど、違う街で遊ぶのは楽しいよ。
                </p></Typography></AccordionDetails>
                </Accordion>
            </div>
            <h2>
                Write ＆ Speak 書く・話す
            </h2>
            <h3>①Answer the questions below.</h3>
            <div className="writing">
                <p>下の質問に答えてみましょう。<br /><br /><br /><br /></p>
                <p>Where are you from? （あなたはどこ出身ですか？）<br />
                <br />
Where is your hometown located?（あなたの故郷はどこに位置していますか？）<br />
<br />
Do you still live in your hometown? If not, until when did you live there?（あなたは今も故郷に住んでいますか？そうでない場合、いつまでそこに住んでいましたか？）<br />
<br />
What is your hometown famous for?（あなたの故郷は何で有名ですか？）<br />
<br />
What do you like about your hometown?（あなたは故郷のどんなところが好きですか？）※複数あれば、複数書いてみましょう。 <br />
<br />
What do you dislike about your hometown?（あなたは故郷のどんなところが嫌いですか？）※複数あれば、複数書いてみましょう。<br />
<br />
Tell me about there things that you used to do in your hometown when you were a child? （あなたは子どもの時、故郷でしていたことを３つ教えてください）
            </p>
            </div>
            <div className="writing">
                <h3>②Recommendation </h3>
                <p>
                If your friend from another country were visiting your hometown, what would you reccomend to him/her?<br />
                <br />
あなたにまだ日本に来たことがない外国人の友達ができたと想定して、その友達にどこに行くのをお勧めしますか？<br />
<br />
※「オススメの場所」を３つ紹介してみましょう。「何ができるのか？」も説明してみましょう。
                </p>
            </div>
            <div className="writing">
                <h3>+α Description</h3>
                <p>
                    If you describe your hometown in three words, what would they be? Explain the reason. あなたの地元を３つの言葉で表すなら、それはどんな言葉になりますか？それぞれ理由も書いてみましょう。
                </p>
            </div>
          </div>
      );
  }
    function C14() {
         const classes = useStyles();
        return (
            <div>
              <h1>C1-4 友達・家族</h1>
              <h2>Goal 目標</h2>
              <p>To become able to talk about your friends and family<br />友達や家族について話せるようになること</p>
              <img src={lesson14} alt="" />
            　<h2>Expression 重要表現</h2>
                <a href="https://drive.google.com/file/d/1gOWTVD8vuCcqDtiSJUbYQd2wgFhXtoH1/view" target="_blank">音声はこちら</a>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>①第三者について話す時の注意点（Be動詞）</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Be動詞を使うときは、基本的に「is」「was」を使う<br />I am Ken. He <span className="under">is</span> Tom.<br /> （私はケンです。彼は、トムです。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>②第三者について話す時の注意点（一般動詞）</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">一般動詞（Be動詞以外の動詞）を使うときは、動詞に「s」をつける<br />I like sweets. He <span className="under">likes</span> spicy food.<br />（私はスイーツが好きです。彼は、辛い食べ物が好きです。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>③私の家族は〜人家族です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">There are ~ people in my family.<br />There are 6 people in my family-me, my parents, brother and two sisters.<br />（私の家族は６人家族です。私と両親と兄（/弟）と２人の姉妹がいます。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>④私には、兄がいます</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I have an older brother.<br />※他の表現には以下のようなものがあります。younger brother（弟）/ older sister（姉）/ younger sister（妹）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑤私は、【ペット】を飼っています</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I have a 【動物名】<br /> I have a cat.<br />（私は猫を飼っています。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑥私は【ペット】を飼いたいです</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I want to have 【動物名】<br />  I want to have a dog.<br />（私は犬を飼いたいです。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑦実家暮らしです/ 一人暮らしです</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I live with my parents/ I live by myself</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑧〜と仲が良い</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">be on good terms with ~/ get along with~/ be close to  ~<br /> I’m on good terms with my parents.<br />（私は両親と仲が良いです。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑨【人】は、〜です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">【人】be 〜<br />  Tom is rude.<br />（トムは無礼です。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑩少し〜です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">a bit  ~/ a little  ~<br />He is a bit annoying.<br />（彼は少し鬱陶しいです。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑪とても〜です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">so  ~/ really ~<br />John is really funny.<br />（ジョンはとても面白いです。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑫私は【人】が〜だと思います</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I think that 【人】be ~<br />I think that he is handsome.<br />（私は彼がハンサムだと思います。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑬【人】は〜（な見た目）です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">【人】 be~/ 【人】look(s) ~<br />He is chubby.<br />（彼はぽっちゃりしています。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑭【人】は〜を持っています</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">【人】 have/has ~<br />Tom has muscles.<br />トムは筋肉があります。<br />She has a brown hair.<br />彼女は、茶髪です。（茶色の髪を持っています）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑮〜が得意です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">be good at ~/ ~ing<br />I’m good at math.<br />私は数学が得意です。<br /> He is good at cooking.<br />彼は料理するのが得意です。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑯〜の扱いが得意です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">be good with ~<br />Accountants are good with numbers.<br />会計士は数字の扱いが得意です。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑰〜は得意ではありません</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">be not good at ~/ ~ing<br /> Tom isn’t good at sports.<br />トムはスポーツが得意ではありません。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑱〜ができます</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">can do~<br /> He can speak English.<br />彼は英語を話すことができます。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑲〜はできません</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">can not/ can’t  do ~<br /> Tom can’t speak Chinese.<br />トムは中国語を話すことができません。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <h2>
                Read ＆ Listen 読む・聞く 
            </h2>
            <a href="https://drive.google.com/file/d/1VqxZJ7Tn-kqnAnZyXnk8S_oTqOgyuk7J/view" target="_blank">
                音声はこちらから
            </a>
            <div className="listening">
                <h3>①</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
                    Teacher: How tall is your sister?<br />
                    <br />
                    Arisa : She is average height.<br />
                    <br />
                    Teacher: What color are her eyes?<br />
                    <br />
                    Arisa: She has brown eyes.<br />
                    <br />
                    Teacher: What is her hair like?<br />
                    <br />
                    Arisa:She has long black hair. What does your son look like?<br />
                    <br />
                    Teacher:He is very short. He has green eyes. He has short red hair.<br />
                    <br />
                    Arisa:What does your daughter look like?<br />
                    <br />
                    Teacher:She is short. She has green eyes. She has long red hair.<br />
                    <br />
                    Arisa: Cool!
                </p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">先生: あなたのお姉さん・妹の身長はどれくらい？<br />
                <br />
ありさ: 彼女は平均的な身長です。<br />
<br />
先生:彼女の目は何色？<br />
<br />
ありさ:彼女は茶色い目をしています。<br />
<br />
先生: 彼女はどんな髪？<br />
<br />
ありさ: 彼女は長くて黒い髪をしています。 あなたの息子さんはどんな外見ですか？<br />
<br />
先生: 彼はとても背が低いの。 彼は緑色の目をしてる。 彼は短くて赤い髪の毛よ。<br />
<br />
ありさ: あなたの娘さんはどんな外見ですか？<br />
<br />
先生: 彼女は背が低いの。 彼女は緑色の目をしてる。 彼女は長くて赤い髪の毛をしてるのよ。<br />
<br />
ありさ:いいですね。</p></p> </Typography></AccordionDetails>
                </Accordion>
                <a href="https://drive.google.com/file/d/1bJZM2wmPheC7B1KwKamovh_Uu5kFTn9Q/view" target="_blank">
                    音声はこちらから
                </a>
            </div>
            <div className="listening">
                <h3>②</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
                Sofia: Hey, I saw some of your pictures with Lorenzo’s family.<br />
                <br />
Haru: Yeah, they invited me for dinner.<br />
<br />
Sofia: Oh, yeah? How was it?<br />
<br />
Haru: Well, I was a little shy at first. Lorenzo and I have been dating for only a month, you know. But his family was really nice.<br />
<br />
Sofia: Oh, good! What are they like?<br />
<br />
Haru: His mom’s so friendly. She talked to me a lot and even cooked her special pasta for me.<br />
<br />
Sofia: She sounds like a nice lady. What about his dad?<br />
<br />
Haru: Oh, he’s really funny. He told jokes all night.
                </p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="listening__japanese">ソフィア: やあ、レオナルドの家族とのあなたの写真をいくつか見たよ。<br />
                <br />
ハル: うん、夕食に招待してくれたんだ。<br />
<br />
ソフィア: そうなんだ！それはどうだった？<br />
<br />
ハル: うーん、最初は少し恥ずかしかった。レオナルドどと私は１ヶ月しか付き合ってないじゃない。でも、彼の家族はとても優しかった。<br />
<br />
ソフィア: おお、それはいいね。彼らはどんな感じだったの？<br />
<br />
ハル: 彼のお母さんはとても親しみがある。たくさん話しかけてくれて、特別なパスタを作ってくれさえしたよ。<br />
<br />
ソフィア: 優しい女性みたいだね。彼のお父さんはどうだった？<br />
<br />
ハル: 彼はとても面白い。一晩中ジョークを言っていた。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="listening">
                <a href="https://drive.google.com/file/d/1xxT_sSchYgLuvjZK4yHkcj0q0WGm-vXd/view" target="_blank">
                    音声はこちらから
                </a>
                <h3>③</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">Haruto: Can you play the piano?<br />
                <br />
Arisa: No, I can't. How about you?<br />
<br />
Haruto: Yes, I can play the piano. Can you speak two languages?<br />
<br />
Arisa: Yes, I can speak Thai and English. How about you? Can you speak Thai?<br />
<br />
Haruto: No, I can't. I can speak English and Japanese. What else can you do? Can you ski?<br />
<br />
Arisa: No, I can't ski. Can you ski?<br />
<br />
Haruto: No, I can’t. I’m not good at sports, but  my brother can ski well.<br />
<br />
Arisa: Cool!
                </p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="listening__japanese">ハルト: 君はピアノが弾ける？<br />
                <br />
ありさ: ううん、弾けない。 あなたはどう？<br />
<br />
ハルト: うん、僕はピアノが弾けるよ。 君は2か国語を話せる？<br />
<br />
ありさ: うん、私はタイ語と英語が話せるの。 あなたはどう？ タイ語を話せる？<br />
<br />
ハルト: ううん、話せない。 僕は英語と日本語が話せるよ。 君はほかに何ができる？ スキーはできる？<br />
<br />
ありさ: いいえ、私はスキーはできない。 あなたはスキーができる？<br />
<br />
ハルト: うん、できるよ。<br />
<br />
ありさ:いいね！
                </p></Typography></AccordionDetails>
                </Accordion>
            </div>
            <h2>
                Write ＆ Speak 書く・話す
            </h2>
            <h3>①Answer the questions below</h3>
            <div className="writing">
                <p>下の質問に英語で答えてみましょう。できる限り、習った表現を使うようにしましょう。</p>
                <p>How many people are there in your family? （何人家族ですか？）<br />
                <br />
                Do you have brothers or sisters? if you do, are they older or younger?（兄弟はいますか？もしいる場合、年上ですか？年下ですか？）<br />
<br />
Do you have a pet? （ペットを飼っていますか？）<br />
<br />
If you were to get a pet, what animal do you want to have?（もしペットを飼うとしたら、どの動物を飼いたいですか？）<br />
<br />
What do you like about your hometown?（あなたは故郷のどんなところが好きですか？）※複数あれば、複数書いてみましょう。 <br />
<br />
What do you dislike about your hometown?（あなたは故郷のどんなところが嫌いですか？）※複数あれば、複数書いてみましょう。<br />
<br />
Tell me about there things that you used to do in your hometown when you were a child? （あなたは子どもの時、故郷でしていたことを３つ教えてください）
            </p>
            </div>
            <div className="writing">
                <h3>②Have an interview  </h3>
                <p>
                Please talk about one person(your family member or friend) including the points below. （家族や友達の中の１人について以下のポイントを含め話してみましょう）<br />
                <br />
                -Who is she/he?（誰か？）<br />
                <br />
                -What does he/she do?（普段何をしている？）<br />
                <br />
                -What does he/she do in his/her free time?（余暇には何をしている？）<br />
                <br />
                -What does he/she look like?（どんな見た目をしている？）<br />
                <br />
                -What is he/she good at?（何が得意？）<br />
                <br />
                -What isn’t he/she good at?（何が不得意？）<br />
                <br />
                -What do you think of him/her?（あなたはその人のことをどう思っているか？）
                </p>
            </div>
            <div className="writing">
                <h3>+α Description</h3>
                <p>
                    If you describe your personality in three words, what would they be? Explain the reason as well.（もし、あなたがあなたの性格を３つの言葉で表すなら、何になりますか？理由も説明してください）
                </p>
            </div>
          </div>
      );
  }
    function C21() {
         const classes = useStyles();
        return (
            <div>
              <h1>C2-1 空港・機内</h1>
              <h2>Goal 目標</h2>
              <p>Flying and Airport <br />フライトや空港で使う会話をマスターすること</p>
              <img src={c21} alt="" />
            　<h2>Expression 重要表現</h2>
                <a href="https://drive.google.com/file/d/1gOWTVD8vuCcqDtiSJUbYQd2wgFhXtoH1/view" target="_blank">音声はこちら</a>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>①チェックインよろしくお願いします</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I would like to check in, please.</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>②今日はどちらへ行かれますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Where are you flying today? / What’s your final destination?</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>③〜まで行きます</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I’m flying to【都市名】/ My final destination is 【都市名】<br />I’m flying to Paris.<br />（パリまで行きます。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>④預けるバックはありますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Are you checking any bags? / Do you have any luggage to check in?）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑤〜を預けます</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I have 〜 to check in.<br /> I have one suitcase to check in.<br />（私は猫を飼っています。）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑥機内持ち込み</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">a carry on <br />This bag is a carry on.<br />このバックは、機内持ち込みです。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑦こちらがあなたの搭乗券です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Here are your boarding passes.</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑧フライトは〜ゲートから出発します</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Your flight leaves from Gate  ~<br />Your flight leaves from Gate A.<br />フライトはゲートAはから出発します。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑨搭乗は〜に始まります</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Boarding begins at 【時間】<br /> Boarding begins at 7.<br />搭乗は７時に始まります。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑩窓側の席にしてもらえますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Can I get a window seat, please?<br />※aisle（通路側の） / exit row（非常口近くの〈足元が広い席〉）/ bulkhead（目の前が壁の）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑪何を飲まれますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">What would you like to drink? / Would you like something to drink?</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑫〜をいただけますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">〜, please./ Can I have ~, please?<br />Can I have coke, please?<br />コーラをいただけますか？</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑬〜は何がありますか？/ どのような種類の〜がありますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">What kind of 〜 do you have?<br />What kind of soft drinks do you have?<br />ソフトドリンクは何がありますか？</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑭パスポート見せてもらえますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">May I see your passport?/ Passport, please/ Passport</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑮〜を訪れるのは初めてですか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Is this your first time to visit 〜?<br />Is this your first time to visit Japan?<br />私は数学が得意です。<br /> 日本を訪れるのは初めてですか？</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑯（〜を訪れるのは）１回目です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">It’s my first time.<br />※ second time（２回目）/ third time（３回目）/ forth time（４回目）/ fifth time（５回目）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑰旅の目的は何ですか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">What’s the purpose of your visit?</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑱遊び/ 観光/ 休暇/ ビジネス/ 勉強のためです</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I’m here for pleasure/ for sightseeing/ on vacation(holiday) / on business/ to study</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑲この国にはどれくらいの期間滞在しますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">How long are you going to stay in this country? </p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑳〜間滞在する予定です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I’ll be here for 【期間】/ For 【期間】<br /> </p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>㉑どこに滞在するつもりですか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Where will you stay?<br /> </p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>㉒〜に滞在します</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I will stay at 【場所】/ At ‍【場所】<br />At the ABC Hotel.<br /> ABCホテルに滞在します。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>㉔私（の職業）は〜です</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I’m 【職業名】. I work for 【会社名】<br />I work for an IT company.<br />私はIT企業で働いています。<br />※ a student（学生）/ a public worker（公務員）/ self-employed（自営業）/ a housewife（主婦）/ a part-time worker（アルバイト）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>㉕〜していただけませんか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Could/ Can you do ~?<br />Could you make this bag as fragile?<br />このバックに割れ物注意のステッカーを貼っていただけませんか？</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>㉖私が〜する場合、どうなりますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">What if I do~?<br />What if I miss the flight?<br />私がフライトを逃したらどうなりますか？</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <h2>
                Read ＆ Listen 読む・聞く 
            </h2>
            <a href="https://drive.google.com/file/d/1VqxZJ7Tn-kqnAnZyXnk8S_oTqOgyuk7J/view" target="_blank">
                音声はこちらから
            </a>
            <div className="listening">
                <h3>①</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
                    Flight Attendant: Would you like something to drink?<br />
                    <br />
                    Matt: Yes, I’d like to have an orange juice.<br />
                    <br />
                    Flight Attendant: Sure. Here it is.<br />
                    <br />
                    Matt: Thank you. May I recline my seat?<br />
                    <br />
                    Flight Attendant: Yes, of course.<br />
                    <br />
                    Matt: And, can I have a blanket, please?<br />
                    <br />
                    Flight Attendant: Sure, I will bring you one right away.<br />
                    <br />
                    Matt: Thank you so much!
                </p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="listening__japanese">客室乗務員：お飲み物はいかがですか。<br />
                <br />
                マット：はい、オレンジジュースをお願いします。<br />
                <br />
                客室乗務員：かしこまりました。 どうぞ。<br />
                <br />
                マット：ありがとうございます。 シートを倒してもいいですか。<br />
                <br />
                客室乗務員：はい、どうぞ。<br />
                <br />
                マット：して、毛布を一枚お願いできますか。<br />
                <br />
                客室乗務員：かしこまりました。すぐにお持ちします。<br />
                <br />
                マット：どうもありがとうございます。
                </p></Typography></AccordionDetails>
                </Accordion>
                <a href="https://drive.google.com/file/d/1bJZM2wmPheC7B1KwKamovh_Uu5kFTn9Q/view" target="_blank">
                    音声はこちらから
                </a>
            </div>
            <div className="listening">
                <h3>②</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
                Immigration officer: May I have your passport and arrival card, please?<br />
                <br />
                Mary: Sure, here it is.<br />
                <br />
                Immigration officer: What's your occupation?<br />
                <br />
                Mary: Sorry, what was that?<br />
                <br />
                Immigration officer: Your occupation. What do you do for a living?<br />
                <br />
                Mary: Oh. I’m an office worker.<br />
                <br />
                Immigration officer: Okay. What's the purpose of your visit?<br />
                <br />
                Mary: I'm here for business.<br />
                <br />
                Immigration officer: How long are you going to stay here?<br />
                <br />
                Mary: I will be here for five days.<br />
                <br />
                Immigration officer: Where are you going to stay?<br />
                <br />
                Mary: At the ABC Hotel.<br />
                <br />
                Immigration officer: Do you have a return ticket?<br />
                <br />
                Mary: Yes.<br />
                <br />
                Immigration officer: Can you show it to me?<br />
                <br />
                Mary: No problem. Here it is.<br />
                <br />
                Immigration officer: Okay. Here’s your passport.<br />
                <br />
                Mary: Thank you.
                </p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="listening__japanese">入国管理官：パスポートと入国カードを拝見できますか。<br />
                <br />
メアリー：もちろんです、どうぞ。<br />
<br />
入国管理官：あなたの職業は何ですか。<br />
<br />
メアリー：すみません、何ですか。<br />
<br />
入国管理官：あなたの職業です。 生活のために何をしていますか。<br />
<br />
メアリー：あぁ。 わたしは会社員です。<br />
<br />
入国管理官：分かりました。 訪問の目的は何ですか。<br />
<br />
メアリー: こちらに仕事で来ました。<br />
<br />
入国管理官:ここでの滞在予定はどのくらいですか。<br />
<br />
メアリー: ５日間います。<br />
<br />
入国管理官: どこに宿泊予定ですか。<br />
<br />
メアリー: ＡＢＣホテルです。<br />
<br />
入国管理官: 帰りのチケットはお持ちですか。<br />
<br />
メアリー: はい。<br />
<br />
入国管理官: 見せていただけますか。<br />
<br />
メアリー: もちろんです。 どうぞ。<br />
<br />
入国管理官: いいですよ。 パスポートをお返しします。<br />
<br />
メアリー: ありがとうございます。</p></Typography></AccordionDetails>
                </Accordion>
                
            </div>
            <div className="listening">
                <a href="https://drive.google.https://drive.google.com/file/d/1xxT_sSchYgLuvjZK4yHkcj0q0WGm-vXd/view" target="_blank">
                    音声はこちらから
                </a>
                <h3>③</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">Matt: Excuse me.<br />
                <br />
                Waiter: Yes, sir?<br />
                <br />
                Matt: I need some help. Umm... Where are the starters?<br />
                <br />
                Waiter: Right here.<br />
                <br />
                Matt: Thank you. What is this dish?<br />
                <br />
                Waiter: Oh, this is a meat dish with steamed vegetables. You can also have potatoes, if you wish.<br />
                <br />
                Matt: That sounds delicious!<br />
                <br />
                Waiter: It is. Would you like to order it?<br />
                <br />
                Matt: Hmmm... I'm still not sure. Do you have any recommendations?<br />
                <br />
                Waiter: Today’s soup of the day is very popular with our customers. It’s chicken pea soup.<br />
                <br />
                Matt: That sounds great. I'll take both the soup and the meat dish, please.<br />
                <br />
                Waiter: Certainly, sir. Anything else?<br />
                <br />
                Matt: A bottle of sparkling water. And when you bring the food, bring the bill, please.<br />
                <br />
                Waiter: All right.
                </p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">マット: すみません。<br />
                <br />
                ウェイター: はい。いかがなさいましたか？<br />
                <br />
                マット: 少し助けが必要なのですが、ううんと。スターターはどこにありますか？<br />
                <br />
                ウェイター: こちらです。<br />
                <br />
                マット: ありがとうございます。この料理は何ですか？<br />
                <br />
                ウェイター: あ、こちらは蒸し野菜を添えたお肉の料理になります。お好みであれば、ポテトも召し上がれます。<br />
                <br />
                マット: ‍美味しそうですね。<br />
                <br />
                ウェイター: はい。それを注文なされますか？<br />
                <br />
                マット: ううんと、まだわからないな。オススメはありますか？？<br />
                <br />
                ウェイター: 本日のスープは、お客様に大変人気です。チキンピースープです。<br />
                <br />
                マット: いいですね。スープとお肉料理の両方お願いします。<br />
                <br />
                ウェイター: かしこまりました。他にご注文はありますか？<br />
                <br />
                マット: 炭酸水をボトルでお願いします。あと、食事を持ってくるときに、お会計もお願いできますか？<br />
                <br />
                ウェイター: かしこまりました。
                </p></p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <h2>
                Write ＆ Speak 書く・話す
            </h2>
            <h3> ①Conversation </h3>
            <div className="writing">
                <p>下の会話を完成させましょう。</p>
                <h4>・予約</h4>
                <p>Teacher:  Hello, can I help you? <br />
                <br />
                    Student: こんにちは、来週予約したいのですが<br />
                    <br />
                    T: How many are in your party?<br />
                    <br />
                    S: ２人です。<br />
                    <br />
                    T: okey, For what time?<br />
                    <br />
                    S: ７時あたりがいいです。<br />
                    <br />
                    T: Sure. <br />
                    <br />
                    S: あと、窓側の禁煙の席でお願い出来ますか？<br />
                    <br />
                    T: Yes!
            </p>
            <h4>・注文</h4>
            <p>
            S:すみません、英語のメニューをいただけますか？<br />
            <br />
            T: Sure.<br />
            <br />
            S: ええっと、チーズバーガーとクラムチャウダーをお願いしますか？<br />
            <br />
            T: OK, would you like fries or coleslaws? <br />
            <br />
            S: フライでお願いします。<br />
            <br />
            T: All right, and what would you like to drink? <br />
            <br />
            S: 大きいコーラをお願いします。<br />
            <br />
            T: Anything else? <br />
            <br />
            S: これで全てです。
            </p>
            <h4>
                ・お会計
            </h4>
            <p>
                S: お会計をお願いできますか？<br />
                <br />
                T: Sure, wait a moment, please. <br />
                <br />
                Would you like to pay cash or by card? <br />
                <br />
                S: カードで払います。<br />
                <br />
                T: please input your PIN.<br />
                <br />
                S: わかりました。<br />
                <br />
                T: How’s the meal. <br />
                <br />
                S: 全て完璧でした。<br />
                <br />
                T: Thank you for coming.
            </p>
            </div>
            <h3>②Discussion</h3>
            <div className="writing">
                <h4>・Trasnportation</h4>
                <p>1.Have you ever been lost? If so, describe the situation.<br />
                    <br />
                    2.Do you know your city/town well? Do you think you could help a lost tourist?<br />
                    <br />
                    3.Are you good at finding your way or do you easily get lost?<br />
                    <br />
                    4.What do you think people who are lost shouldn’t do?<br />
                    <br />
                    5.Do you think that being lost can be a fun experience? Why?
                </p>
                <h4>・Shopping</h4>
                <p>
                    1.Do you like shopping? Why?<br />
                    <br />
                    2.Do you think that working as a shop assistant is difficult? Why or why not?<br />
                    <br />
                    3.What things make the best souvenirs in your opinion?<br />
                    <br />
                    4.What kind of souvenirs can tourists buy in your area?<br />
                    <br />
                    5.Do you think “oniomania” (an uncontrollable desire to buy things) is dangerous?
                </p>
            </div>
            <div className="writing">
                <h3>＋α More role play</h3>
                <p>
                    Write＆Speak①の会話文の流れにそって、<br />
                    会話文を自分で英語で書いてみましょう。
                </p>
            </div>
          </div>
      );
  }
    function C22() {
         const classes = useStyles();
        return (
            <div>
              <h1>C2-2 ホテル</h1>
              <h2>Goal 目標</h2>
              <p>Hotel <br />ホテルでの会話をマスターすること</p>
              <img src={c22} alt="" />
            　<h2>Expression 重要表現</h2>
                <a href="https://drive.google.com/file/d/14IG5nzvZZIteChY5tvb1YgOffBowMcBQ/view" target="_blank">音声はこちら</a>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>①こんにちは、チェックインお願いします</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Hello. Check in, please./ I’d like to check in.</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>②予約をしていますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Do you have a reservation?</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>③お名前をお伺いします。</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Your name? / May I have your name, please?</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>④バウチャーとパスポートを見せてください。</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Please show the voucher and your passport.</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑤クレジットカードをお願いします。</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">We will need a credit card, please.</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑥どうぞ、こちらです</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Here you are./ Here you go/ Here it is.</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑦支払い方法はどうしますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">How would you like to pay?</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑧カードで支払います</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I’ll pay by card/ By card<br />※ in cash （現金で）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑨チェックアウトお願いします</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I’m checking out.</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑩この部屋は〜ですか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Is this room  ~?<br />Is this room with a bathtub?<br />この部屋はバスタブ付きですか？<br />※予約通りに部屋が予約できているかを確認するときに使えます</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑪〜の部屋をお願いしたいです</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I’d like  ~, please.<br />I’d like a non smoking room.<br />禁煙の部屋をお願いしたいのです。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑫〜の部屋は空いていますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Do you have ~ room available?<br />Do you have a twin-bedded room?<br />ツインベッドの部屋は空いてますか？<br /><br />※ a room near the elevator/ lift（エレベーター近くの）/ a room with a bathtub/ a shower（バスタブ/シャワー付きの）/ a room with a nice view（眺めの良い）/ a quiet room（静かな）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑬〜の部屋をお願いできますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">May I ask for  ~<br />May I ask for a room with a better view?<br />もう少し眺めの良い部屋をお願いできますか？<br /><br />※a room on a higher floor（もう少し上の階の部屋）/ a little bit larger room（もう少し広めの部屋）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑭感謝を伝える表現</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Thank you. ありがとうございます。<br />Thank you so much. 本当にありがとうございます。<br />That would be great. そうしてもらえると助かります。<br />That’s so kind of you. ご親切にありがとうございます。<br />I really appreciate it. 本当に感謝します。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑮〜が動きません</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">〜 don’t /doesn’t wo<br />The airconditioner doesn’t work. <br />エアコンが動きません。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑯〜が壊れています</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">~ is/ are broken.<br />The toilet is broken.<br />トイレが壊れています。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑰〜ができません</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">There is/are no  ~ in 【場所】<br />There is no toilet paper in the bathroom. <br />トイレに紙がありません。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑱【場所】に〜がありません</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I’m here for pleasure/ for sightseeing/ on vacation(holiday) / on business/ to study</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑲〜を直してもらえますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Can you fix ~?<br />Can you fix the air conditioner?<br />エアコンを直してくれませんか？ </p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑳〜を持ってきてもらえますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Can/Could you bring  ~ ?<br />Can you bring a pot?<br />ポットを持ってきてもらえますか？</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>㉑〜を借りられますか?</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Can I borrow ~?<br />Can I borrow an iron?<br />アイロンを借りられますか？</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>㉒〜の使い方を教えてくれませんか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Would you tell me how to use  ~?<br />Would you tell me how to use the internet?<br /> インターネットの使い方を教えてくれませんか？</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>㉓〜できますか？してもいいですか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Could/ Can I/we do~?<br />Can I use the internet for free?<br />無料でインターネットを使えますか？</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <h2>
                Read ＆ Listen 読む・聞く 
            </h2>
            <a href="https://drive.google.com/file/d/1VqxZJ7Tn-kqnAnZyXnk8S_oTqOgyuk7J/view" target="_blank">
                音声はこちらから
            </a>
            <div className="listening">
                <h3>①</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
                Matt: Good afternoon. I'd like to check in. I have a reservation.<br />
                <br />
                Receptionist: May I have your name, please?<br />
                <br />
                Matt: Matt Davidson.<br />
                <br />
                Receptionist: Could you spell your last name, please?<br />
                <br />
                Matt: D-A-V-I-D-S-O-N.<br />
                <br />
                Receptionist: Let me check... We have your reservation for two nights starting today. May I see your identification?<br />
                <br />
                Matt: Here’s my passport.<br />
                <br />
                Receptionist: Thank you. Could you fill out this form, please?<br />
                <br />
                Matt: Sure.<br />
                <br />
                Receptionist: Thank you. Your room number is 504. Here is the key to your room.<br />
                <br />
                Matt: All right.<br />
                <br />
                Receptionist: Breakfast will be served in the cafeteria from 7:00 to 10:00 A.M. If you have any requests, please call the front desk.<br />
                <br />
                Matt: Thanks. Can I use the Internet in my room?<br />
                <br />
                Receptionist: Yes, we have a Wi-Fi connection in each room. Here’s the password.<br />
                <br />
                Matt: Thanks.<br />
                <br />
                Receptionist: Enjoy your stay.
                </p>
                </Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">マット: こんにちは。 チェックインをしたいのですが。 予約をしています。<br />
                <br />
                受付: お名前を頂戴できますでしょうか。<br />
                <br />
                マット: マット・デビッドソンです。<br />
                <br />
                受付: 名字のスペルを教えていただけますか。<br />
                <br />
                マット: D-A-V-I-D-S-O-N。<br />
                <br />
                受付: 確認いたします。 今日から２泊ご予約されています。 身分証明書を見せていただけますか。<br />
                <br />
                マット: これが私のパスポートです。<br />
                <br />
                受付: ありがとうございます。 このフォームにご記入をお願いします。<br />
                <br />
                マット: 分かりました。<br />
                <br />
                受付: ありがとうございます。 お部屋は504号室となります。 こちらがお部屋の鍵でございます。<br />
                <br />
                マット: 分かりました。<br />
                <br />
                受付: 朝食はカフェテリアで朝７時から１０時まで提供されます。 何かご要望がございましたらフロントデスクまでお電話ください。<br />
                <br />
                マット: ありがとう。 自分の部屋でインターネットは使えますか。<br />
                <br />
                受付: はい、各部屋に Wi-Fi 接続がございます。 こちらがパスワードです。<br />
                <br />
                マット: ありがとう。<br />
                <br />
                受付: ご滞在をお楽しみ下さい。
                </p></p> </Typography></AccordionDetails>
                </Accordion>
                <a href="https://drive.google.com/file/d/1bJZM2wmPheC7B1KwKamovh_Uu5kFTn9Q/view" target="_blank">
                    音声はこちらから
                </a>
            </div>
            <div className="listening">
                <h3>②</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
                Receptionist: Hello, this is the front desk. How may I help you?<br />
                <br />
                Matt: Hello, I'm calling from room 1205. I’d like to turn on the air conditioner but I cannot find the switch. Could you tell me where it is?<br />
                <br />
                Receptionist: Of course, sir. The switch is next to the TV.<br />
                <br />
                Matt: Let me see... I found it. Thanks.<br />
                <br />
                Receptionist: You’re welcome sir.<br />
                <br />
                Matt: Oh, one more thing. Could you please put a call through to room 1115?<br />
                <br />
                Receptionist: May I ask for the name of the guest staying in that room?<br />
                <br />
                Matt: Zach Williams. We checked in at the same time yesterday.<br />
                <br />
                Receptionist: Oh, yes. Please hold the line. I’ll put a call through to the room.<br />
                <br />
                Matt: All right, thanks.<br />
                <br />
                Receptionist: Happy to be of assistance, sir.
                </p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">受付: はい、こちらフロントデスクでございます。 いかがなさいましたか。<br />
                <br />
マット: あの、1205号室から電話しています。 エアコンをつけたいのですが、スイッチが見つけられません。 どこにあるか教えていただけますか。<br />
<br />
受付: もちろんでございます。 スイッチはテレビの横にございます。<br />
<br />
マット: えーっと。 ありました。 ありがとうございます。<br />
<br />
受付: とんでもございません。<br />
<br />
マット: あ、あと1点あるのですが。 1115号室に電話をつないでいただけますか。<br />
<br />
受付: そちらのお部屋に宿泊中のお客様のお名前を伺ってもよろしいでしょうか。<br />
<br />
マット: ザック・ウイリアムズです。 昨日同じ時間にチェックインしました。<br />
<br />
受付: 承知いたしました。。 そのままお待ちください。 お部屋におつなぎいたします。<br />
<br />
マット: どうもありがとうございます。<br />
<br />
受付: とんでもございません。</p></p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="listening">
                <a href="https://drive.google.com/file/d/1xxT_sSchYgLuvjZK4yHkcj0q0WGm-vXd/view" target="_blank">
                    音声はこちらから
                </a>
                <h3>③</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">Matt: Hello. I'd like to know if it's possible for me to move to a different room.<br />
                <br />
Receptionist: Is there something wrong with your room?<br />
<br />
Matt: The water heater is not working.<br />
<br />
Receptionist: I apologize for that. Let me check our room availability. Alright, we can give you another room on the 5th floor.<br />
<br />
Matt: Does that room overlook the sea?<br />
<br />
Receptionist: Yes, it does.<br />
<br />
Matt: Wonderful! I’ll take it. Thank you very much!<br />
<br />
Receptionist: You’re welcome. I’ll be there shortly to pass the room key.
                </p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">マット: もしもし。 違う部屋に移動できるか知りたいのですが。<br />
                <br />
受付: お部屋に何か問題がございましたか。<br />
<br />
マット: お湯が出ません。<br />
<br />
受付: 申し訳ございません。 空いているお部屋を確認させていただきます。 では、５階の別の部屋をご用意いたします。<br />
<br />
マット: その部屋は海を見渡せますか。<br />
<br />
受付: はい、見渡せます。<br />
<br />
マット: いいですね。 そうしてください。 どうもありがとうございます。<br />
<br />
受付: とんでもございません。 お部屋の鍵をお渡しにすぐそちらへ伺います。<br />
                </p></p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <h2>
                Write ＆ Speak 書く・話す
            </h2>
            <h3>①Role Play</h3>
            <div className="writing">
                <p>下のシチュエーションの会話を自分で作ってみよう。</p>
                <h4>(1)ホテルチェックイン</h4>
                <p>※〇〇は、あなた自身に当てはめて英語をつくってみましょう。<br />
                <br />
                あなた: こんにちは、チェックインお願いします。<br />
                <br />
Hotel Receptionist: Hello, of course. Do you have a reservation? <br />
<br />
あなた: はい。<br />
<br />
HR:  May I have your name? <br />
<br />
あなた: 〇〇です。<br />
<br />
HR: Thank you. May I have your ID and the voucher, please?<br />
<br />
あなた: ちょっと待ってください。…どうぞ、こちらです。<br />
<br />
HR: Thank you so much. Rooms are paid for in advance. How would you like to pay?<br />
<br />
あなた: カードで支払います。ところで、この部屋は禁煙ですか？<br />
<br />
HR: Actually, no.<br />
<br />
あなた: 禁煙の部屋がいいのですが、禁煙の部屋は空いていますか？<br />
<br />
HR: Let me check. Yes, we have a non smoking room available. Your room number is 100. This is the room key.<br />
<br />
あなた: ありがとうございます。
            </p>
            <h4>(2)部屋のトラブル</h4>
            <p>
            Hotel Receptionist: Hello, this is the front desk. How may I help you?<br />
            <br />
            あなた:こんにちは、エアコンをつけたいのですが、エアコンがつきません。<br />
            <br />
            HR: I’m really sorry. I’ll be there to fix it.<br />
            <br />
            あなた: ありがとうございます。あと、部屋にポットがありません。ポットを持ってきてもらえませんか？<br />
            <br />
            HR: Sure. What’s your room number, please?<br />
            <br />
            あなた: 私の部屋の番号は、115です。<br />
            <br />
            HR: Just a moment, please.
            </p>
            </div>
            <div className="writing">
                <h3>②Situation</h3>
                <p>以下のホテル滞在中のトラブルが起きたと想定して、フロントに電話で伝える練習をしましょう。トラブルは何か？ホテルのスタッフへのリクエストは何か？の２つの点に着目して英語で書いてみましょう。</p>
                <p>
                    部屋に枕がない時 <br/>
                    <br/>
                    インターネットに接続できない時<br/>
                    <br/>
                    金庫の使い方が分からない時<br/>
                    <br/>
                    となりの部屋がうるさい時<br/>
                    <br/>
                    部屋に鍵を置きっぱなしにして部屋に入れなくなってしまった時
                </p>
            </div>
            <div className="writing">
                <h3>③Question and Answer</h3>
                <p>ホテルについての質問に英語で答えてみましょう。</p>
                <p>
                    Do you like to stay at hotels? Why, or why not?（ホテルに泊まるのは好きか？なぜか？）ーYes/ No, because ~<br />
                    <br />
                    What would you do if a guest staying in a room next to your room was noisy?（となりの部屋の宿泊客がうるさかったらどうするか？）ーI would ~<br />
                    <br />
                    What kind of room do you usually prefer when you stay at hotels?（ホテルに泊まるとき、どのような部屋がいいか？）ーI prefer ~ <br />
                    <br />
                    When was the last time you stayed at a hotel? （最後にホテルに泊まったのはいつか？） ー It was ~<br />
                    <br />
                    Do you prefer to relax in a hotel room or hang out when you travel? Why or why not?（旅行するときは、ホテルでくつろぐのと外出するのどちらが好きですか？なぜか？）
                </p>
            </div>
            <div className="writing">
                <h3>+α More role play</h3>
                <p>
                Write＆Speak①の会話文の流れを参考にして、<br />
                会話文を自分なりにアレンジして英語で書いてみましょう。
                </p>
            </div>
          </div>
      );
  }
    function C23() {
         const classes = useStyles();
        return (
            <div>
              <h1>C2-3 レストラン</h1>
              <h2>Goal 目標</h2>
              <p>Reataurant <br />レストランでの会話をマスターすること</p>
              <img src={c23} alt="" />
            　<h2>Expression 重要表現</h2>
                <a href="https://drive.google.com/file/d/1p-8teXYw-qYfG7COXTSNK7lmzAqH7qB4/view" target="_blank">音声はこちら</a>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>①こんにちは、チェックインお願いします</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Hello. Check in, please./ I’d like to check in.</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>②予約をしていますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Do you have a reservation?</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>③お名前をお伺いします。</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Your name? / May I have your name, please?</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>④バウチャーとパスポートを見せてください。</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Please show the voucher and your passport.</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑤クレジットカードをお願いします。</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">We will need a credit card, please.</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑥どうぞ、こちらです</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Here you are./ Here you go/ Here it is.</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑦支払い方法はどうしますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">How would you like to pay?</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑧カードで支払います</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I’ll pay by card/ By card<br />※ in cash （現金で）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑨チェックアウトお願いします</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I’m checking out.</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑩この部屋は〜ですか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Is this room  ~?<br />Is this room with a bathtub?<br />この部屋はバスタブ付きですか？<br />※予約通りに部屋が予約できているかを確認するときに使えます</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑪〜の部屋をお願いしたいです</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I’d like  ~, please.<br />I’d like a non smoking room.<br />禁煙の部屋をお願いしたいのです。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑫〜の部屋は空いていますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Do you have ~ room available?<br />Do you have a twin-bedded room?<br />ツインベッドの部屋は空いてますか？<br /><br />※ a room near the elevator/ lift（エレベーター近くの）/ a room with a bathtub/ a shower（バスタブ/シャワー付きの）/ a room with a nice view（眺めの良い）/ a quiet room（静かな）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑬〜の部屋をお願いできますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">May I ask for  ~<br />May I ask for a room with a better view?<br />もう少し眺めの良い部屋をお願いできますか？<br /><br />※a room on a higher floor（もう少し上の階の部屋）/ a little bit larger room（もう少し広めの部屋）</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑭感謝を伝える表現</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Thank you. ありがとうございます。<br />Thank you so much. 本当にありがとうございます。<br />That would be great. そうしてもらえると助かります。<br />That’s so kind of you. ご親切にありがとうございます。<br />I really appreciate it. 本当に感謝します。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑮〜が動きません</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">〜 don’t /doesn’t wo<br />The airconditioner doesn’t work. <br />エアコンが動きません。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑯〜が壊れています</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">~ is/ are broken.<br />The toilet is broken.<br />トイレが壊れています。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑰〜ができません</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">There is/are no  ~ in 【場所】<br />There is no toilet paper in the bathroom. <br />トイレに紙がありません。</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑱【場所】に〜がありません</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">I’m here for pleasure/ for sightseeing/ on vacation(holiday) / on business/ to study</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑲〜を直してもらえますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Can you fix ~?<br />Can you fix the air conditioner?<br />エアコンを直してくれませんか？ </p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑳〜を持ってきてもらえますか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Can/Could you bring  ~ ?<br />Can you bring a pot?<br />ポットを持ってきてもらえますか？</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>㉑〜を借りられますか?</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Can I borrow ~?<br />Can I borrow an iron?<br />アイロンを借りられますか？</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>㉒〜の使い方を教えてくれませんか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Would you tell me how to use  ~?<br />Would you tell me how to use the internet?<br /> インターネットの使い方を教えてくれませんか？</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="work">
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>㉓〜できますか？してもいいですか？</Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer">Could/ Can I/we do~?<br />Can I use the internet for free?<br />無料でインターネットを使えますか？</p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <h2>
                Read ＆ Listen 読む・聞く 
            </h2>
            <a href="https://drive.google.com/file/d/1VqxZJ7Tn-kqnAnZyXnk8S_oTqOgyuk7J/view" target="_blank">
                音声はこちらから
            </a>
            <div className="listening">
                <h3>①</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
                A:May I help you?<br />
                <br />
                B:  I'd like to make a reservation for tonight.<br />
                <br />
                A: For how many guests?<br />
                <br />
                B: For 4 persons.<br />
                <br />
                A: Do you have any requests for your table?<br />
                <br />
                B: I'd like a table beside the window.<br />
                <br />
                A: Anything else?<br />
                <br />
                B: Do you have a dress code?<br />
                <br />
                A: T-shirt or jeans are not allowed.<br />
                <br />
                B: I understand.<br />
                <br />
                A: What time would you like to come in?<br />
                <br />
                B: We'll come around 8 pm.<br />
                <br />
                A: I'm afraid we are full at 8 pm.<br />
                <br />
                B: What time would you recommend?<br />
                <br />
                A: How about at 9 pm?<br />
                <br />
                B: Great. Thank you.
                </p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">A: いらっしゃいませ<br />
                <br />
                B: 今晩の予約をお願いします。<br />
                <br />
                A: 何名様ですか？<br />
                <br />
                B: ４人です。<br />
                <br />
                A: お席にご要望はございますか？<br />
                <br />
                B: 窓際の席でお願いします。<br />
                <br />
                A: 他にはいかがですか？<br />
                <br />
                B: ドレスコードはありますか？<br />
                <br />
                A: Ｔシャツ、ジーンズはお断りしております。<br />
                <br />
                B: わかりました。<br />
                <br />
                A: 何時にお越しになりますか？<br />
                <br />
                B: ８時ごろ伺います。<br />
                <br />
                A: あいにく８時は満席となっております。<br />
                <br />
                B: 何時なら大丈夫ですか？<br />
                <br />
                A: ９時でいかがでしょうか？<br />
                <br />
                B: いいですね。ありがとう。
                </p></p> </Typography></AccordionDetails>
                </Accordion>
                <a href="https://drive.google.com/file/d/1bJZM2wmPheC7B1KwKamovh_Uu5kFTn9Q/view" target="_blank">
                    音声はこちらから
                </a>
            </div>
            <div className="listening">
                <h3>②</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
                    Matt: Hello! Do you have any free tables? I'd like to have lunch here.<br />
                    <br />
                    Waiter: Yes, come this way, please.<br />
                    <br />
                    Matt: Could I have the menu, please?<br />
                    <br />
                    Waiter: Certainly. Here is the menu. Would you like something to drink while you're deciding?<br />
                    <br />
                    Matt: Just a glass of water for now, thank you.<br />
                    <br />
                    Waiter: Very well, sir. Take your time.
                </p></Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">マット: こんにちは！席空いていますか？ここでランチをしたいのですが。<br />
                <br />
ウェイター: はい！こちらへどうぞ<br />
<br />
マット: メニューをいただけますか？<br />
<br />
ウェイター: もちろんです。こちらがメニューになります。決めている間、何か飲まれますか？<br />
<br />
マット: 今のところは水だけで大丈夫です。ありがとう。<br />
<br />
ウェイター: 良かったです。ごゆっくりどうぞ。
                </p></p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <div className="listening">
                <a href="https://drive.google.com/file/d/1xxT_sSchYgLuvjZK4yHkcj0q0WGm-vXd/view" target="_blank">
                    音声はこちらから
                </a>
                <h3>③</h3>
                <Accordion>
                    <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">Matt: Hello. I'd like to know if it's possible for me to move to a different room.<br />
                <br />
Receptionist: Is there something wrong with your room?<br />
<br />
Matt: The water heater is not working.<br />
<br />
Receptionist: I apologize for that. Let me check our room availability. Alright, we can give you another room on the 5th floor.<br />
<br />
Matt: Does that room overlook the sea?<br />
<br />
Receptionist: Yes, it does.<br />
<br />
Matt: Wonderful! I’ll take it. Thank you very much!<br />
<br />
Receptionist: You’re welcome. I’ll be there shortly to pass the room key.
                </p>
                </Typography></AccordionSummary >
                    <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">マット: もしもし。 違う部屋に移動できるか知りたいのですが。<br />
                <br />
受付: お部屋に何か問題がございましたか。<br />
<br />
マット: お湯が出ません。<br />
<br />
受付: 申し訳ございません。 空いているお部屋を確認させていただきます。 では、５階の別の部屋をご用意いたします。<br />
<br />
マット: その部屋は海を見渡せますか。<br />
<br />
受付: はい、見渡せます。<br />
<br />
マット: いいですね。 そうしてください。 どうもありがとうございます。<br />
<br />
受付: とんでもございません。 お部屋の鍵をお渡しにすぐそちらへ伺います。<br />
                </p></p> </Typography></AccordionDetails>
                </Accordion>
            </div>
            <h2>
                Write ＆ Speak 書く・話す
            </h2>
            <h3>①Role Play</h3>
            <div className="writing">
                <p>下のシチュエーションの会話を自分で作ってみよう。</p>
                <h4>(1)ホテルチェックイン</h4>
                <p>※〇〇は、あなた自身に当てはめて英語をつくってみましょう。<br />
                <br />
                あなた: こんにちは、チェックインお願いします。<br />
                <br />
                Hotel Receptionist: Hello, of course. Do you have a reservation? <br />
                <br />
                あなた: はい。<br />
                <br />
                HR:  May I have your name? <br />
                <br />
                あなた: 〇〇です。<br />
                <br />
                HR: Thank you. May I have your ID and the voucher, please?<br />
                <br />
                あなた: ちょっと待ってください。…どうぞ、こちらです。<br />
                <br />
                HR: Thank you so much. Rooms are paid for in advance. How would you like to pay?<br />
                <br />
                あなた: カードで支払います。ところで、この部屋は禁煙ですか？<br />
                <br />
                HR: Actually, no.<br />
                <br />
                あなた: 禁煙の部屋がいいのですが、禁煙の部屋は空いていますか？<br />
                <br />
                HR: Let me check. Yes, we have a non smoking room available. Your room number is 100. This is the room key.<br />
                <br />
                あなた: ありがとうございます。
                </p>
                <h4>(2)部屋のトラブル</h4>
                <p>
                Hotel Receptionist: Hello, this is the front desk. How may I help you?<br />
                <br />
                あなた:こんにちは、エアコンをつけたいのですが、エアコンがつきません。<br />
                <br />
                HR: I’m really sorry. I’ll be there to fix it.<br />
                <br />
                あなた: ありがとうございます。あと、部屋にポットがありません。ポットを持ってきてもらえませんか？<br />
                <br />
                HR: Sure. What’s your room number, please?<br />
                <br />
                あなた: 私の部屋の番号は、115です。<br />
                <br />
                HR: Just a moment, please.
                </p>
            </div>
            <div className="writing">
                <h3>②Situation</h3>
                <p>以下のホテル滞在中のトラブルが起きたと想定して、フロントに電話で伝える練習をしましょう。トラブルは何か？ホテルのスタッフへのリクエストは何か？の２つの点に着目して英語で書いてみましょう。</p>
                <p>
                    部屋に枕がない時 <br/>
                    <br/>
                    インターネットに接続できない時<br/>
                    <br/>
                    金庫の使い方が分からない時<br/>
                    <br/>
                    となりの部屋がうるさい時<br/>
                    <br/>
                    部屋に鍵を置きっぱなしにして部屋に入れなくなってしまった時
                </p>
            </div>
            <div className="writing">
                <h3>③Question and Answer</h3>
                <p>ホテルについての質問に英語で答えてみましょう。</p>
                <p>
                    Do you like to stay at hotels? Why, or why not?（ホテルに泊まるのは好きか？なぜか？）ーYes/ No, because ~<br />
                    <br />
                    What would you do if a guest staying in a room next to your room was noisy?（となりの部屋の宿泊客がうるさかったらどうするか？）ーI would ~<br />
                    <br />
                    What kind of room do you usually prefer when you stay at hotels?（ホテルに泊まるとき、どのような部屋がいいか？）ーI prefer ~ <br />
                    <br />
                    When was the last time you stayed at a hotel? （最後にホテルに泊まったのはいつか？） ー It was ~<br />
                    <br />
                    Do you prefer to relax in a hotel room or hang out when you travel? Why or why not?（旅行するときは、ホテルでくつろぐのと外出するのどちらが好きですか？なぜか？）
                </p>
            </div>
            <div className="writing">
                <h3>+α More role play</h3>
                <p>
                Write＆Speak①の会話文の流れを参考にして、<br />
                会話文を自分なりにアレンジして英語で書いてみましょう。
                </p>
            </div>
          </div>
      );
  }
  function C24() {
    const classes = useStyles();
   return (
       <div>
         <h1>C2-4 交通・ショッピング</h1>
         <h2>Goal 目標</h2>
         <p>Transportation and Shopping <br />移動やショッピングをする時に使う会話をマスターすること</p>
         <img src={c24} alt="" />
       　<h2>Expression 重要表現</h2>
           <a href="https://drive.google.com/file/d/1z8N-C67GppkXQx3IH1GO1TbNfyZiVf2F/view" target="_blank">音声はこちら</a>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>①私は〜に行きたいです</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer">I want to go to 【場所名】<br />I want to go to Shibuya.<br />私は渋谷に行きたいです。</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>②〜までの道を教えていただけますか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer">Can you tell me the way to ~?<br />Can you tell me the way to ABC hotel?<br /> ABCホテルまでの道を教えていただけますか？</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>③どのように〜に行けますか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">How can I get to ~?</span><br />How can I get to ABC museum?<br />どうすればABCミュージアムに行けますか？</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>④〜がどこにあるのか知っていますか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Do you know where ~ is(/are)?</span><br />Do you know where the station is?<br />その駅がどこにあるのか知っていますか？</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑤〜する方法を教えてもらえませんか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Can you tell me how to do ~?</span><br />Can you tell me how to buy a ticket? <br />チケットを買う方法を教えてもらえませんか？</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑥どの電車を乗ればいいですか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Which train should I take?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑦そこに行くまでにどれくらい時間がかかりますか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">How long does it take to get there?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑧運賃はいくらですか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">How long does it take to get there?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑨何かお手伝いしましょうか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Can I help you?/ May I help you?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑩〜を探しています</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I’m looking for ~</span><br />I’m looking for shoes.<br />私は靴を探しています。</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑪見ているだけです</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I’m just looking/ browsing</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑫〜はありますか？〜は扱ってますか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Do you have ~</span><br />Do you have a notebook?<br />ノートはありますか？</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑬試着していいですか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Can I try it on?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑭これの〜色はありますか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Do you have a 【色】one?/ Do you have this in 【色】?</span><br />Do you have this in blue?<br />これの青色はありますか？</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑮小さい/大きいのはありますか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Do you have a smaller / larger one?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑯これのS/M/Lのサイズはありますか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Do you have this in small/ medium/ large?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑰これはいくらですか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">How much is this?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑱考えます</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I’ll think about it.</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑲これをください</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I’ll take this.</span> </p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <h2>
           Read ＆ Listen 読む・聞く 
       </h2>
       <a href="https://drive.google.com/file/d/1VqxZJ7Tn-kqnAnZyXnk8S_oTqOgyuk7J/view" target="_blank">
           音声はこちらから
       </a>
       <div className="listening">
           <h3>①</h3>
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
               Matt: Excuse me, I’d like to take the Airport Express Line. How can I get on the train?<br/>
               <br/>
                Airport clerk: You can just go straight to the platform.<br/>
                <br/>
                Matt: Can you tell me how to buy a ticket? This is my first time taking the airport train.<br/>
                <br/>
                Airport clerk: It's very simple. You can buy your ticket at one of the automatic ticket machines just beside the platform. Where do you want to go?<br/>
                <br/>
                Matt: I want to go to Kowloon. Is there a direct train that can take me there?<br/>
                <br/>
                Airport clerk: No, sir. But the one that goes there only stops at a few stations, and it’s fast.<br/>
                <br/>
                Matt: I see. How long does it take?<br/>
                <br/>
                Airport clerk: It takes about 25 minutes to reach Kowloon.<br/>
                <br/>
                Matt: Do you know what time it leaves the airport?<br/>
                <br/>
                Airport clerk: I'm not sure about the exact time, but it usually leaves every ten to fifteen minutes.<br/>
                <br/>
                Matt: Oh, okay. That sounds great. Thank you so much.<br/>
                <br/>
                Airport clerk: You’re welcome, sir. Have a safe trip.
           </p></Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">
                   マット: すみません。エアポートエクスプレスラインに乗りたいのですが、どうすればその電車に乗れますか？<br />
                   <br />
空港店員: 駅のプラットホームの方にまっすぐ行けば行けますよ。<br />
<br />
マット: どうやってチケットを買うか教えてもらえますか？エアポートトレインに乗るのが初めてで。<br />
<br />
空港店員: とても単純です。プラットホームのすぐ近くにある自動チケット機械の１つでチケットを買うことができます。<br />
<br />
マット: 私は、カウロンに行きたいんです。そこまで行ける直行電車はありますか？？<br />
<br />
空港店員: ないですが、そこにいく電車は数駅しか止まらず、速いです。<br />
<br />
マット: なるほど、どれくらいかかりますか？<br />
<br />
空港店員: だいたいカウロンに着くのに２５分くらいかかります。<br />
<br />
マット: その電車が何時に空港を出発するかんかりますか？<br />
<br />
空港店員: 正確な時間は分かりませんが、いつも１０分から１５分間隔で出発しています。<br />
<br />
マット: おお、分かりました。いいですね。どうもありがとうございました。<br />
<br />
空港店員: どういたしまして。気をつけてくださいね。
           </p></p> </Typography></AccordionDetails>
           </Accordion>
           <a href="hhttps://drive.google.com/file/d/1bJZM2wmPheC7B1KwKamovh_Uu5kFTn9Q/view" target="_blank">
               音声はこちらから
           </a>
       </div>
       <div className="listening">
           <h3>②</h3>
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
               Matt: Hello! Do you have paper cups?<br />
               <br />
Clerk: Yes, they are in aisle 3.<br />
<br />
Matt: Thank you. And where are the paper towels?<br />
<br />
Clerk: They're in the same aisle as paper cups, sir.<br />
<br />
Matt: Oh, I see. One more thing.<br />
<br />
Matt: How much are these?<br />
<br />
Clerk: They're 15 dollars each.<br />
<br />
Matt: I see... They're all white and black. Do you have these in other colors?<br />
<br />
Clerk: I'm afraid we don't, sir.<br />
<br />
Matt: Okay, thank you very much.
           </p></Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">
               マット: こんにちは。紙コップは扱ってますか？<br />
               <br />
店員: はい。３番通路にあります。<br />
<br />
マット: ありがとう。あと、ペーパータオルはどこにありまぬか？<br />
<br />
店員: 紙コップと同じ通路にあります。<br />
<br />
マット: 分かりました。あと、１つ、これらはいくらですか？<br />
<br />
店員: それぞれ１５ドルです。<br />
<br />
マット: 分かりました。それらは、全て白と黒ですね。ほかの色はありますか？<br />
<br />
店員: 残念ですがありません。<br />
<br />
マット: 分かりました。どうもありがとうございます。
           </p></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="listening">
           <a href="https://drive.google.com/file/d/1xxT_sSchYgLuvjZK4yHkcj0q0WGm-vXd/view" target="_blank">
               音声はこちらから
           </a>
           <h3>③</h3>
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
               Clerk: Hello, sir.<br />
               <br />
Matt: Hi. I'd like to pay for these. Do you accept credit cards?<br />
<br />
Clerk: Certainly.<br />
<br />
Matt: Great. And, can I ask you a favor?<br />
<br />
Clerk: What can I do for you?<br />
<br />
Matt: Do you have change for a 20 dollar bill? I have all these bills in my wallet, but I really need some small change for the bus.<br />
<br />
Clerk: Of course, sir.<br />
<br />
Matt: Thank you so much! I really appreciate it.
           </p>
           </Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">
               店員: こんにちは。<br />
               <br />
マット: やぁ。これらを会計したいんですが、クレジットカードはつかえますか？<br />
<br />
店員: もちろんです。<br />
<br />
マット: 良かった。あと、お願いしていいかな？<br />
<br />
店員: いかがしましたか？<br />
<br />
マット: 20ドル札を崩してもらえませんか？財布に色々なお札が入っているんですが、バスに乗るためにいくつか小さな小銭がほんとうに必要で。<br />
<br />
店員: もちろんです。<br />
<br />
マット: どうもありがとうございます。大変感謝します。
           </p></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <h2>
           Write ＆ Speak 書く・話す
       </h2>
       <h3>①Conversation</h3>
       <div className="writing">
           <p>Complete the conversations below<br/><br/>下の会話文を完成させましょう。</p>
           <h4>(1)</h4>
           <p>You: すみません。東京まで行きたいのですが。どうやったら東京駅まで行けますか？<br />
           <br />
Station Officer: You should take Chuo Line. <br />
<br />
You: ありがとうございます。チケットの買い方を教えてくれませんか？<br />
<br />
SO: Sure. You can buy a ticket over there.<br />
<br />
You: 運賃はいくらですか？<br />
<br />
SO: It’s 300 yen. <br />
<br />
You: ところで、そこまでどれくらい時間がかかりますか？<br />
<br />
SO: About 30 minutes.<br />
<br />
You: 本当にありがとうございます。
           </p>
           <h4>(2)</h4>
           <p>
           Clerk: Hello, May I help you?<br />
           <br />
You: 私はTシャツを探しています。Tシャツは扱っていますか？<br />
<br />
Clerk: Yes, of course. Here it is.<br />
<br />
You: Looks great. これの青色はありますか？<br />
<br />
Clerk: Yes! <br />
<br />
You: 試着してもいいですか？<br />
<br />
Clerk: Sure. <br />
<br />
You: Good. I liked it. これを買います。<br />
<br />
Clerk: Okay. Thank you.<br />
<br />
You: クレジットカードは使えますか？<br />
<br />
Clerk: I’m sorry, we don’t. <br />
<br />
You: わかりました。現金で払います。<br />
<br />
Clerk: Okey. 
           </p>
       </div>
       <div className="writing">
           <h3>②Discussion</h3>
           <p><br /></p>
           <h4>・Trasnportation</h4>
           <p>1.Have you ever been lost? If so, describe the situation.<br />
<br />
2.Do you know your city/town well? Do you think you could help a lost tourist?<br />
<br />
3.Are you good at finding your way or do you easily get lost?<br />
<br />
4.What do you think people who are lost shouldn’t do?<br />
<br />
5.Do you think that being lost can be a fun experience? Why?
           </p>
           <h4>・Shopping</h4>
           <p>1.Do you like shopping? Why?<br />
<br />
2.Do you think that working as a shop assistant is difficult? Why or why not?<br />
<br />
3.What things make the best souvenirs in your opinion?<br />
<br />
4.What kind of souvenirs can tourists buy in your area?<br />
<br />
5.Do you think “oniomania” (an uncontrollable desire to buy things) is dangerous?
           </p>
       </div>
       <div className="writing">
           <h3>+α More role play</h3>
           <p>
           Write＆Speak①の会話文の流れを参考にして、<br />
           会話文を自分なりにアレンジして英語で書いてみましょう。
           </p>
       </div>
     </div>
 );
}
  function B11() {
    const classes = useStyles();
   return (
       <div>
         <h1>B1-1 新しく友達をつくる</h1>
         <h2>Goal 目標</h2>
         <p>To become able to make new friends<br />新しい友達をつくれるようになること</p>
         <img src={b11} alt="" />
       　<h2>Expression 重要表現</h2>
           <a href="https://drive.google.com/file/d/1z8N-C67GppkXQx3IH1GO1TbNfyZiVf2F/view" target="_blank">音声はこちら</a>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>①あなたの名前はなんですか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">What's your name?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>②わたしは〜です</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I'm ~/ My name is~</span><br />I'm Tom. （わたしはトムです）</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>③あなたはどこ出身ですか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Where are you from?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>④わたしは〜出身です</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I'm from ~</span><br />from Tokyo, Japan.（わたしは日本の東京出身です。）<br />※下の表現も合わせて覚えておきましょう。<br />I was born in ~ （〜で生まれました） <br />/I grew up in ~/ was raised in ~ / was brought up in ~ （〜で育った）</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑤あなたはどこに住んでいますか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Where do you live?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑥わたしは〜に住んでいます</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I live in ~</span><br />I live in Nagoya. （わたしは名古屋に住んでいます）</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑦あなたは何をされていますか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">What do you do?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑧わたしは学生です</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I'm a student.</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑨わたしは〜大学に通っています</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I go to ABC university.</span><br />わたしはABC大学に通っています。</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑩わたしは〜を専攻しています</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I major in ~ / My major is ~</span><br />I major in economics. （わたしは経済学を専攻しています）</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑪わたしは〜で働いています</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I work at 場所名</span><br />I work at a cafe. （わたしはカフェで働いています）</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑫わたしは〜として働いています</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I'm 職業名 / I work as 職業名</span><br />I'm a nurse. （わたしは看護師です）</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑬わたしは〜で働いています</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I work for 会社名・場所名</span><br />I work for an IT company. （わたしはIT企業に勤めています）</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑭わたしの趣味は〜です</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Do you have a 【色】one?/ Do you have this in 【色】?</span><br />Do you have this in blue?<br />これの青色はありますか？</p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑮小さい/大きいのはありますか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Do you have a smaller / larger one?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑯これのS/M/Lのサイズはありますか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">Do you have this in small/ medium/ large?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑰これはいくらですか？</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">How much is this?</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑱考えます</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I’ll think about it.</span></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="work">
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}>⑲これをください</Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><span className="big">I’ll take this.</span> </p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <h2>
           Read ＆ Listen 読む・聞く 
       </h2>
       <a href="https://drive.google.com/file/d/1VqxZJ7Tn-kqnAnZyXnk8S_oTqOgyuk7J/view" target="_blank">
           音声はこちらから
       </a>
       <div className="listening">
           <h3>①</h3>
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
               Matt: Excuse me, I’d like to take the Airport Express Line. How can I get on the train?<br/>
               <br/>
                Airport clerk: You can just go straight to the platform.<br/>
                <br/>
                Matt: Can you tell me how to buy a ticket? This is my first time taking the airport train.<br/>
                <br/>
                Airport clerk: It's very simple. You can buy your ticket at one of the automatic ticket machines just beside the platform. Where do you want to go?<br/>
                <br/>
                Matt: I want to go to Kowloon. Is there a direct train that can take me there?<br/>
                <br/>
                Airport clerk: No, sir. But the one that goes there only stops at a few stations, and it’s fast.<br/>
                <br/>
                Matt: I see. How long does it take?<br/>
                <br/>
                Airport clerk: It takes about 25 minutes to reach Kowloon.<br/>
                <br/>
                Matt: Do you know what time it leaves the airport?<br/>
                <br/>
                Airport clerk: I'm not sure about the exact time, but it usually leaves every ten to fifteen minutes.<br/>
                <br/>
                Matt: Oh, okay. That sounds great. Thank you so much.<br/>
                <br/>
                Airport clerk: You’re welcome, sir. Have a safe trip.
           </p></Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">
                   マット: すみません。エアポートエクスプレスラインに乗りたいのですが、どうすればその電車に乗れますか？<br />
                   <br />
空港店員: 駅のプラットホームの方にまっすぐ行けば行けますよ。<br />
<br />
マット: どうやってチケットを買うか教えてもらえますか？エアポートトレインに乗るのが初めてで。<br />
<br />
空港店員: とても単純です。プラットホームのすぐ近くにある自動チケット機械の１つでチケットを買うことができます。<br />
<br />
マット: 私は、カウロンに行きたいんです。そこまで行ける直行電車はありますか？？<br />
<br />
空港店員: ないですが、そこにいく電車は数駅しか止まらず、速いです。<br />
<br />
マット: なるほど、どれくらいかかりますか？<br />
<br />
空港店員: だいたいカウロンに着くのに２５分くらいかかります。<br />
<br />
マット: その電車が何時に空港を出発するかんかりますか？<br />
<br />
空港店員: 正確な時間は分かりませんが、いつも１０分から１５分間隔で出発しています。<br />
<br />
マット: おお、分かりました。いいですね。どうもありがとうございました。<br />
<br />
空港店員: どういたしまして。気をつけてくださいね。
           </p></p> </Typography></AccordionDetails>
           </Accordion>
           <a href="hhttps://drive.google.com/file/d/1bJZM2wmPheC7B1KwKamovh_Uu5kFTn9Q/view" target="_blank">
               音声はこちらから
           </a>
       </div>
       <div className="listening">
           <h3>②</h3>
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
               Matt: Hello! Do you have paper cups?<br />
               <br />
Clerk: Yes, they are in aisle 3.<br />
<br />
Matt: Thank you. And where are the paper towels?<br />
<br />
Clerk: They're in the same aisle as paper cups, sir.<br />
<br />
Matt: Oh, I see. One more thing.<br />
<br />
Matt: How much are these?<br />
<br />
Clerk: They're 15 dollars each.<br />
<br />
Matt: I see... They're all white and black. Do you have these in other colors?<br />
<br />
Clerk: I'm afraid we don't, sir.<br />
<br />
Matt: Okay, thank you very much.
           </p></Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">
               マット: こんにちは。紙コップは扱ってますか？<br />
               <br />
店員: はい。３番通路にあります。<br />
<br />
マット: ありがとう。あと、ペーパータオルはどこにありまぬか？<br />
<br />
店員: 紙コップと同じ通路にあります。<br />
<br />
マット: 分かりました。あと、１つ、これらはいくらですか？<br />
<br />
店員: それぞれ１５ドルです。<br />
<br />
マット: 分かりました。それらは、全て白と黒ですね。ほかの色はありますか？<br />
<br />
店員: 残念ですがありません。<br />
<br />
マット: 分かりました。どうもありがとうございます。
           </p></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <div className="listening">
           <a href="https://drive.google.com/file/d/1xxT_sSchYgLuvjZK4yHkcj0q0WGm-vXd/view" target="_blank">
               音声はこちらから
           </a>
           <h3>③</h3>
           <Accordion>
               <AccordionSummary　expandIcon='&or;' aria-controls="panel5a-content" id="panel5a-header" className="work__question"><Typography className={classes.heading}><p className="listening__english">
               Clerk: Hello, sir.<br />
               <br />
Matt: Hi. I'd like to pay for these. Do you accept credit cards?<br />
<br />
Clerk: Certainly.<br />
<br />
Matt: Great. And, can I ask you a favor?<br />
<br />
Clerk: What can I do for you?<br />
<br />
Matt: Do you have change for a 20 dollar bill? I have all these bills in my wallet, but I really need some small change for the bus.<br />
<br />
Clerk: Of course, sir.<br />
<br />
Matt: Thank you so much! I really appreciate it.
           </p>
           </Typography></AccordionSummary >
               <AccordionDetails><Typography><p className="work__answer"><p className="listening__japanese">
               店員: こんにちは。<br />
               <br />
マット: やぁ。これらを会計したいんですが、クレジットカードはつかえますか？<br />
<br />
店員: もちろんです。<br />
<br />
マット: 良かった。あと、お願いしていいかな？<br />
<br />
店員: いかがしましたか？<br />
<br />
マット: 20ドル札を崩してもらえませんか？財布に色々なお札が入っているんですが、バスに乗るためにいくつか小さな小銭がほんとうに必要で。<br />
<br />
店員: もちろんです。<br />
<br />
マット: どうもありがとうございます。大変感謝します。
           </p></p> </Typography></AccordionDetails>
           </Accordion>
       </div>
       <h2>
           Write ＆ Speak 書く・話す
       </h2>
       <h3>①Conversation</h3>
       <div className="writing">
           <p>Complete the conversations below<br/><br/>下の会話文を完成させましょう。</p>
           <h4>(1)</h4>
           <p>You: すみません。東京まで行きたいのですが。どうやったら東京駅まで行けますか？<br />
           <br />
Station Officer: You should take Chuo Line. <br />
<br />
You: ありがとうございます。チケットの買い方を教えてくれませんか？<br />
<br />
SO: Sure. You can buy a ticket over there.<br />
<br />
You: 運賃はいくらですか？<br />
<br />
SO: It’s 300 yen. <br />
<br />
You: ところで、そこまでどれくらい時間がかかりますか？<br />
<br />
SO: About 30 minutes.<br />
<br />
You: 本当にありがとうございます。
           </p>
           <h4>(2)</h4>
           <p>
           Clerk: Hello, May I help you?<br />
           <br />
You: 私はTシャツを探しています。Tシャツは扱っていますか？<br />
<br />
Clerk: Yes, of course. Here it is.<br />
<br />
You: Looks great. これの青色はありますか？<br />
<br />
Clerk: Yes! <br />
<br />
You: 試着してもいいですか？<br />
<br />
Clerk: Sure. <br />
<br />
You: Good. I liked it. これを買います。<br />
<br />
Clerk: Okay. Thank you.<br />
<br />
You: クレジットカードは使えますか？<br />
<br />
Clerk: I’m sorry, we don’t. <br />
<br />
You: わかりました。現金で払います。<br />
<br />
Clerk: Okey. 
           </p>
       </div>
       <div className="writing">
           <h3>②Discussion</h3>
           <p><br /></p>
           <h4>・Trasnportation</h4>
           <p>1.Have you ever been lost? If so, describe the situation.<br />
<br />
2.Do you know your city/town well? Do you think you could help a lost tourist?<br />
<br />
3.Are you good at finding your way or do you easily get lost?<br />
<br />
4.What do you think people who are lost shouldn’t do?<br />
<br />
5.Do you think that being lost can be a fun experience? Why?
           </p>
           <h4>・Shopping</h4>
           <p>1.Do you like shopping? Why?<br />
<br />
2.Do you think that working as a shop assistant is difficult? Why or why not?<br />
<br />
3.What things make the best souvenirs in your opinion?<br />
<br />
4.What kind of souvenirs can tourists buy in your area?<br />
<br />
5.Do you think “oniomania” (an uncontrollable desire to buy things) is dangerous?
           </p>
       </div>
       <div className="writing">
           <h3>+α More role play</h3>
           <p>
           Write＆Speak①の会話文の流れを参考にして、<br />
           会話文を自分なりにアレンジして英語で書いてみましょう。
           </p>
       </div>
     </div>
 );
}

  function TabPanel(props) {
       const classes = useStyles();
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
       const classes = useStyles();
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  

const Homework = ({ onRouteChange, isSignedIn }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    

    if (isSignedIn) {
      return (
          <div className="homework">

        <Tabs>
            <div className="row al-fl-sta">
                <Toggle />
                <div className='homework__sidebar'>
                    <AppBar position="static">
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab className="child" label="Home" {...a11yProps(0)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;レッスン教材" {...a11yProps(1)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cクラス教材" {...a11yProps(2)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C1-1" {...a11yProps(3)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C1-2" {...a11yProps(4)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C1-3" {...a11yProps(5)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C1-4" {...a11yProps(6)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C2-1" {...a11yProps(7)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C2-2" {...a11yProps(8)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C2-3" {...a11yProps(9)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C2-4" {...a11yProps(10)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bクラス教材" {...a11yProps(11)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B1-1" {...a11yProps(12)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B1-2" {...a11yProps(13)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B1-3" {...a11yProps(14)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B1-4" {...a11yProps(15)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B2-1" {...a11yProps(16)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B2-2" {...a11yProps(17)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B2-3" {...a11yProps(18)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B2-4" {...a11yProps(19)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B3-1" {...a11yProps(20)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B3-2" {...a11yProps(21)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B3-3" {...a11yProps(22)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B3-4" {...a11yProps(23)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aクラス教材" {...a11yProps(24)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A1-1" {...a11yProps(25)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A1-2" {...a11yProps(26)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A1-3" {...a11yProps(27)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A1-4" {...a11yProps(28)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A2-1" {...a11yProps(29)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A2-2" {...a11yProps(30)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A2-3" {...a11yProps(31)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A2-4" {...a11yProps(32)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A3-1" {...a11yProps(33)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A3-2" {...a11yProps(34)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A3-3" {...a11yProps(35)} />
                            <Tab className="child" label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A3-4" {...a11yProps(36)} />
                        </Tabs>
                    </AppBar>
                </div>
                <div className="homework__main">
                    <div className="container">    
                        <TabPanel value={value} index={0}>
                            <Home />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            レッスン教材
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Cクラス教材
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <C11 />
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <C12 />
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <C13 />
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            <C14 />
                        </TabPanel>
                        <TabPanel value={value} index={7}>
                            <C21 />
                        </TabPanel>
                        <TabPanel value={value} index={8}>
                            <C22 />
                        </TabPanel>
                        <TabPanel value={value} index={9}>
                            <C23 />
                        </TabPanel>
                        <TabPanel value={value} index={10}>
                            <C24 />
                        </TabPanel>
                        <TabPanel value={value} index={11}>
                            Bクラス教材
                        </TabPanel>
                        <TabPanel value={value} index={12}>
                            B11
                        </TabPanel>
                        <TabPanel value={value} index={13}>
                            B12
                        </TabPanel>
                        <TabPanel value={value} index={14}>
                            B13
                        </TabPanel>
                        <TabPanel value={value} index={15}>
                            B14
                        </TabPanel>
                        <TabPanel value={value} index={16}>
                            B21
                        </TabPanel>
                        <TabPanel value={value} index={17}>
                            B22
                        </TabPanel>
                        <TabPanel value={value} index={18}>
                            B23
                        </TabPanel>
                        <TabPanel value={value} index={19}>
                            B24
                        </TabPanel>
                        <TabPanel value={value} index={20}>
                            B31
                        </TabPanel>
                        <TabPanel value={value} index={21}>
                            B32
                        </TabPanel>
                        <TabPanel value={value} index={22}>
                            B33
                        </TabPanel>
                        <TabPanel value={value} index={23}>
                            B34
                        </TabPanel>
                        <TabPanel value={value} index={24}>
                            Aクラス教材
                        </TabPanel>
                        <TabPanel value={value} index={25}>
                            A11
                        </TabPanel>
                        <TabPanel value={value} index={26}>
                            A12
                        </TabPanel>
                        <TabPanel value={value} index={27}>
                            A13
                        </TabPanel>
                        <TabPanel value={value} index={28}>
                            A14
                        </TabPanel>
                        <TabPanel value={value} index={29}>
                            A21
                        </TabPanel>
                        <TabPanel value={value} index={30}>
                            A22
                        </TabPanel>
                        <TabPanel value={value} index={31}>
                            A23
                        </TabPanel>
                        <TabPanel value={value} index={32}>
                            A24
                        </TabPanel>
                        <TabPanel value={value} index={33}>
                            A31
                        </TabPanel>
                        <TabPanel value={value} index={34}>
                            A32
                        </TabPanel>
                        <TabPanel value={value} index={35}>
                            A33
                        </TabPanel>
                        <TabPanel value={value} index={36}>
                            A34
                        </TabPanel>
                    </div>
                </div>
            </div>
        </Tabs>
      </div>
      );
    } else {
        return (
        <div>
            会員登録をしていない方は見ることができません。
        </div>
      );
    }
}

export default Homework;