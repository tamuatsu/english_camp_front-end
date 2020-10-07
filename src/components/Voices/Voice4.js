import React from 'react';
import '../First/First.css';

import spvoice41 from '../../images/sp-voice4-1.png';
import voice41 from '../../images/voice4-1.png';
import voice42 from '../../images/voice4-2.png';
import voice43 from '../../images/voice4-3.png';
import Interview from '../Parts/Interview';
import interview from '../../images/interview-tit.png';
import spinterview from '../../images/sp-interview-title2.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Voice4 = ({}) => {
    return (
        <Switch>
            <Route path="/voice4">
                <div>
                    <h1 className="page_title voice4">
                        渡邉駿平さん
                    </h1>
                    <section className="breadcrumbs">
                        <div className="container sp-wi90">
                            TOP ＞ 受講生の声 ＞ 渡邉駿平さん
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <img className="mb80 pc" src={interview} alt="" />
                            <img className="mb80 sp" src={spinterview} alt="" />
                            <h2 className="voice-section2__title">スポーツ一筋で、<br className="sp"/>勉強経験がほぼゼロから<br />流暢な英会話力を手に入れた<br className="sp"/>グローバルな人材へ</h2>
                            <img src={voice41} alt="" className="counsel pc" />
                            <img src={spvoice41} alt="" className="counsel sp" />
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 01</span><br />
                                    英語を勉強しようと思ったきっかけはなんですか？
                                </h3>
                                <p>
                                    もともと早稲田大学の付属高校出身で高校生活のほとんどは部活動の野球に注いできました。そのため正直、英語に限らず勉強を真剣にやってきませんでした。<br />
                                    <br />
                                    しかし大学に進学後、1年生のはじめにクラス分けのためにTOEICを受けたのですが、自分はそこで340点を取ってしまいました。<br />
                                    <br />
                                    周りの一般入試組は当たり前に600点とか700点を取っていて、900点以上の生徒もざらにいて、一般入試組との学力差をまじまじと感じました。<br />
                                    <br />
                                    「付属の自分とはこんなにも差があるんだ」とちょっと恐かったのを覚えています。<br />
                                    <br />
                                    英語の授業で外国人の先生に当てられるのが本当に嫌で、いざ当てられるとテンパって答えられないですし、なるべく自分が当てられないようにしていました。<br />
                                    <br />
                                    友達と海外旅行に行った時も、全く英語が話せず、Google翻訳に頼ることしかできない自分が本当に嫌で、恥ずかしかったです。<br />
                                    <br />
                                    また、姉がCAをやっていて当たり前に英語を話せるんですが、「こんなのもわからないの？英語できなさすぎでしょ」と、いつも言われてきました。<br />
                                    <br />
                                    そんな中、大学3年生になって就活を意識し始めたときに「自分には野球しか強みがない…何か他の強みがほしい」と思い、英語と向き合う決心をしました。
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 02</span><br />
                                    ENGLISH CAMP参加前は、大学で英語をどのように勉強していましたか？
                                </h3>
                                <p>
                                    英語は本当に授業だけでしか触れていませんでしたね。受験勉強をしてこなかった自分は単語も文法も理解できず、宿題をGoogle翻訳で訳してなんとか提出するというような感じでした。<br />
                                    <br />
                                    もちろん、一般入試組との差を感じて危機感はあったんですが、何からどう英語を勉強すればいいのかもわからなくて、結局何も行動に移せませんでした。<br />
                                    <br />
                                    姉や親に言われて英語の参考書を買って勉強しようとしたこともありましたが、独学では全く頭に入らず、半分諦めていました。<br />
                                    <br />
                                    留学や英会話スクールも考えましたが、高校から私立なのもあり「お金の負担」で躊躇して、親にも相談できずにいました。<br />
                                    <br />
                                    また正直な話、「今のレベルだったら、意味もないだろうな…」という不安もあって、英語自体から逃げていたのが本音です。
                                </p>
                                <img src={voice42} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 03</span><br />
                                    英語に対してどのようなイメージがありましたか？
                                </h3>
                                <p>
                                    英語は「苦手」どころか「わけわからない」が、正直なイメージです。<br />
                                    <br />
                                    大学1年時のTOEICスコアは340点でしたし、中学レベルの英語すら理解していませんでした。<br />
                                    <br />
                                    一般動詞を使う疑問文で「Does he ～」なのか「Is he ～」なのかもわからず、いつも姉に「あんたやばくね」とバカにされていましたね。（笑）<br />
                                    <br />
                                    なので、スピーキングはおろか、リーディングもリスニングも、全く話にならないレベルで、今振り返ると当時の自分の英語レベルは本当にやばかったですね。
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 04</span><br />
                                    ENGLISH CAMPに参加しようと思った理由を教えてください。
                                </h3>
                                <p>
                                    就活のことを意識したときに、サークルの先輩に就活の面接について相談したところ「大学生活で何を頑張ってきたのか？」を質問されると聞きました。<br />
                                    <br />
                                    当時の自分が頑張ってきたものといえば、野球サークルとバイトだけだったので、何かもう一つ自分の誇れる強みを作りたくて英語を勉強しようと決心しました。<br />
                                    <br />
                                    正直、高校までは野球に本気で向き合って本気で挑戦してきたんですが、大学ではそういうものが全く無くなかったんです。<br />
                                    <br />
                                    「このままで本当にいいのかな？」「何か新しいことに挑戦したい」と思っていても、英語は苦手で一歩踏み出せなくて…。ずっとモヤモヤしていました。<br />
                                    <br />
                                    そんなときにENGLISH CAMPに出会い、ここには自分と同じように将来のためにこれから英語に挑戦している学生もいて、ここなら挑戦できると感じて、ENGLISH CAMP参加を決断しました。<br />
                                    <br />
                                    英語初心者の自分でも参加できるクラスがあったり、スタッフの方が英語力に不安があった自分を真剣に考えてくれたのも、ENGLISH CAMPに参加した決め手ですね。
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 05</span><br />
                                    ENGLISH CAMPに参加して英語学習にどの様な変化がありましたか？
                                </h3>
                                <p>
                                    一番の変化は、当たり前に毎日英語の勉強をするようになりました！<br />
                                    <br />
                                    元々は英語が苦手だったのでモチベーションに波があったり、バイトとサークルも忙しかったため継続できない自分でしたが、英語を勉強する習慣が身につきました。v
                                    <br />
                                    最初に出された課題の英語日記がかなり効きましたね。毎日英語をアウトプットする習慣が身について日常生活でも英語を意識するようになりました。<br />
                                    <br />
                                    洋楽を聞いてるときや電車で英語のアナウンスを聞くとき、道端で英語表記の看板を見たときも「なんて意味だろう？」「どういう英語なら伝わりやすいだろう？と考えていました。<br />
                                    <br />
                                    また、大学の授業と違ってレッスンは外国人の先生1人に対して、3〜4人の生徒だったので、1回のレッスンで何回も英語を話す機会があり、正直、最初は大変でしたね。（笑）<br />
                                    <br />
                                    でもレッスンごとに自分の課題が明確になり、日々の英語学習を継続していくと、だんだん英語力があがって、最後の方は先生ともっとコミュニケーションを取りたいと自分から思うようになりました。<br />
                                    <br />
                                    そしたら、大学の授業でも自分からどんどん発言するようになっていて、以前までの僕は付属性だからと言い訳にしていたのに、自分でもびっくりです。
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 06</span><br />
                                    ENGLISH CAMPに参加して英語に対するモチベーションはどの様に変化しましたか？
                                </h3>
                                <p>
                                TOEICスコアが340から610に上がりました！やっぱり日々の外国人の先生との英会話レッスンで、リスニング力がかなり鍛えられたのが一番力になったと思います。<br />
                                <br />
                                最初はついていくのに必死だったレッスンも、3ヶ月目辺りから先生の言ってることがちゃんと聞き取れるようになっていました。また、スタッフの方に勧めてもらった問題集をやったら、一気に英語の知識量も増えましたね。<br />
                                <br />
                                家で勉強したこともちゃんとレッスンで使えたので、外国人の先生に自分の発音も直してもらいながら、使える英語が身に着いたと思います。<br />
                                <br />
                                TOEICテストの結果が返ってきたとき、こんな自分が610点も取れていたのに驚いて、家族LINEに画像を送ったら、家族全員、びっくりしていました。（笑）<br />
                                <br />
                                特に自分は父親と仲がいいのですが「自分の努力が形になってよかったな、良い決断だったんじゃないか」と言ってもらえてすごく嬉しかったです。<br />
                                <br />
                                「あんたが本気でやりたいなら良いんじゃない。」と背中を押してくれた父と母には、本当に感謝しているし、良い結果を報告できて本当によかったです。<br />
                                <br />
                                同じ大学の友達にも「いつの間にそんなに英語できるようになったの！？」と驚かれました。（笑）なかなか自分の意見を英語で話すことができなかった自分が、流暢に授業で発言している姿を見てくれたからだと思います。<br />
                                <br />
                                昔は外国人の方に極力話しかけられないよう、イヤホンをして避けてた自分ですが、今では道案内もできるようになり、外国人の友達を作って一緒にお酒を飲める仲になれたり、本当に自信が付きましたね。
                                </p>
                                <img src={voice43} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd last">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 07</span><br />
                                    ENGLISH CAMPでの6ヶ月間の感想を教えてください。
                                </h3>
                                <p>
                                    ENGLISH CAMPに参加して、一番、考え方が変わりました。<br />
                                    <br />
                                    参加する決断を迷っていたとき、代表の坂本さんに「今頑張るか頑張らないかでこれからかなり変わってくる」と言ってもらえて、自分にできるか不安はありましたが、英語に挑戦する決断ができました。<br />
                                    <br />
                                    今振り返ると、あれが自分の人生を変えた大きな決断だったと思います。そして、ENGLISH CAMPへの参加をきっかけに、自分の人生をより良くするために多くの挑戦をするようになりました。<br />
                                    <br />
                                    本当に昔の自分だったら考えられないくらいに、勇気を振り絞って1回挑戦することができたら、たくさん挑戦できる自分に変わることができました。<br />
                                    <br />
                                    今の自分の座右の銘は「挑戦して後悔することよりも、挑戦しないで後悔することの方がダサい」です。これからも選択を迫られたら、自分は挑戦する方を選んでいきます。<br />
                                    <br />
                                    今は就活中で、商社で働くことを目指しています。商社の仕事は貿易によって文化も考え方も全く違う国と国をつなぐ仕事です。<br />
                                    <br />
                                    自分自身、英語を話せるようになって違う国の人と関わり価値観が変わった経験から、今度は自分がいろんな価値観を繋げられるグローバルな人になりたいと思って、商社を目指すことにしました。<br />
                                    <br />
                                    そのために、これからも英語の勉強を続けていこうと思っています。ここに参加していなかったら自分はこんなに変わっていなかったし、商社で働きたいという夢も諦めていたと思います。<br />
                                    <br />
                                    本当に参加して良かったです。ありがとうございました！
                                </p>
                            </div>
                        </div>
                    </section>
                    <Interview />
                </div>
            </Route>
        </Switch>
    );
}

export default Voice4