import React from 'react';
import '../First/First.css';

import spvoice21 from '../../images/sp-voice2-1.png';
import voice21 from '../../images/voice2-1.png';
import voice22 from '../../images/voice2-2.png';
import voice23 from '../../images/voice2-3.png';
import voice24 from '../../images/voice2-4.png';
import voice25 from '../../images/voice2-5.png';
import Interview from '../Parts/Interview';
import interview from '../../images/interview-tit.png';
import spinterview from '../../images/sp-interview-title2.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Voice2 = ({}) => {
    return (
        <Switch>
            <Route path="/voice2">
                <div>
                    <h1 className="page_title voice2">
                        鳥屋桃子さん
                    </h1>
                    <section className="breadcrumbs">
                        <div className="container sp-wi90">
                            TOP ＞ 受講生の声 ＞ 鳥屋桃子さん
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <img className="mb80 pc" src={interview} alt="" />
                            <img className="mb80 sp" src={spinterview} alt="" />
                            <h2 className="voice-section2__title">コンプレックスを感じていた<br class="sp" />英会話力を克服し、<br />TOEIC800を獲得して、<br class="sp" />英語を活かした職業に大きく前進！</h2>
                            <img src={voice21} alt="" className="counsel pc" />
                            <img src={spvoice21} alt="" className="counsel sp" />
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 01</span><br />
                                    英語を勉強しようと思ったきっかけはなんですか？
                                </h3>
                                <p>
                                    英語は小学生の頃から興味があって、好きでした！<br />
                                    <br />
                                    小学生の頃から中学生の頃まで母の知り合い人がやっていた英会話に参加していて、当時は先生が全く何を言っているのかわからなかったけど、雰囲気が楽しかったので続けていました。<br />
                                    <br />
                                    大学でも英語を勉強したいと思い、指定校推薦で専修大学の英文科に入学しました。<br />
                                    <br />
                                    高校の時から文法の勉強などはしていたので１年生の英語のクラス分けのために行われたTOEICテストでは570点取ることができて1番上のクラスに参加したのですが、上のクラスだと帰国子女でTOEIC800点以上の人たちがたくさんいたり、外国人の先生と普通に英語で会話している人たちもけっこういて、自分の会話力の低さを痛感しました。<br />
                                    <br />
                                    私はペーパーでしか基本英語の勉強をしていなかったので、英語の授業中でもレベルの高い会話には全くついていけなくて、自分の英会話力に凄くコンプレックスがありました。<br />
                                    <br />
                                    もともと人と話すのが苦手なのもあって、英語の授業中も自分が当てられないように先生と目を合わさないようにコソコソしていました（笑）でもさすがにこのままじゃ嫌だと思い、本格的に英会話の勉強をしたいと思うようになりました。
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
                                    よく、英文科なので英語を話す授業がたくさんあると思われがちなんですが、キリスト教などの宗教のことや文学について日本語での授業もあり、意外と英語を話す授業はそれほどありませんでした。<br />
                                    <br />
                                    大学の英語の授業では、海外の事情について長文を読んだり、軽いディスカッションなどがありました。でも、クラスでも英語が話せる人と話せない人が2極化していて、英語が話せない人は話せない人同士で日本語を話してしまったり、先生もけっこうゆるいのでそれが許される環境でした。<br />
                                    <br />
                                    私も英語が話せないのでけっこう日本語で話してましたね。<br />
                                    <br />
                                    英文科って英語ができるイメージですが、意外とすぐ日本語で話してしまったり、書いてあるものを読んでいるだけだったので、会話の上達はあまり実感できませんでした。<br />
                                    <br />
                                    学校の授業以外では、家で学校の宿題をやる程度で、あとはTOEICテストの前だけ少し自分で勉強するくらいでした。TOEICテストの勉強は、問題演習と単語の暗記をひたすら繰り返してましたね。
                                </p>
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
                                    当時はReadingの勉強をしていたのですが、全然伸びなくて焦っていましたね。<br />
                                    <br />
                                    特に何もしていなかったListeningが感が当たってスコアが少し伸びて、勉強していたはずのReadingは横ばいで同じくらいのスコアって感じでした。<br />
                                    <br />
                                    Speakingに関してはやっぱり苦手意識が拭えなくて、ずっと英語を話すのが恥ずかしかったり、自信がありませんでした。<br />
                                    <br />
                                    それで、親に頼んで2年生から外国人留学生の人と暮らす学生寮に入ったんですが、「自分の英語が聞き取ってもらえなかったらどうしよう」と不安で、あまり自分から留学生に英語で話しかけられなかったです。<br />
                                    <br />
                                    もう英会話が苦手だったし、怖かったです。コミュ障でした（笑）でもそういう経験もあって、もっと英語をちゃんと話せるようになりたいって思えたんですよね。
                                </p>
                                <img src={voice22} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 04</span><br />
                                    英語のどのようなところが苦手でしたか？
                                </h3>
                                <p>
                                    ReadingとSpeakingが苦手でしたね。Readingは長文を読んでいる時に、読んでいるつもりなんですが意外と頭に内容が入っていなくて問題を解く時に抜けてしまっているんですよね。<br />
                                    <br />
                                    毎回答え合わせの時に「なんでこれを間違ったんだろう。」と愕然としていました。<br />
                                    <br />
                                    Speakingは今まで伝えたとおりすごく自信が無くて、そもそも人と話すこと自体苦手だったのでずっと英語で話すことが怖ったです。Speakingは何から勉強すれば良いのかわからなくてずっと伸び悩んでいましたね。<br />
                                    <br />
                                    あと、勉強の継続も苦手でした。<br />
                                    <br />
                                    1年生の頃は英語のクラスで上のクラスに入れたので2年生から下のクラスに落ちないように多少自分でも英語の勉強をしていたんですが、2年生になってからは英語の明確な目標が無くなってしまって、バイトとサークルの活動をメインでやっていたのであまり勉強ができていなかったです。
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 05</span><br />
                                    ENGLISH CAMPに参加しようと思った理由を教えてください。
                                </h3>
                                <p>
                                    ENGLISH CAMPは寮が同じだった友達が紹介してくれて、無料体験レッスンに行ったことがきっかけで入会しました。<br />
                                    <br />
                                    もともとこのままじゃ英語が上達しないと思っていたので、3年時で留学を考えていたのですが、ただ留学してもあまり意味が無いと思い、日本で英語力を身につけようと思って英会話スクールを探している時期でした。<br />
                                    <br />
                                    無料体験レッスンに行った時、すでに参加している同世代の他大学の生徒さんたちと関わったんですが、すごく努力している人たちばかりで自分ももっとやらなきゃって思えました。外国人の先生たちもすごくアットホームな感じで、楽しそうだったのでENGLISH CAMPに入会しました。
                                </p>
                                <img src={voice23} alt="" />
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
                                    ENGLISH CAMPに参加してからは「ちゃんと英語力を身につけて終えたい」という気持ちが1日も途切れませんでした。最初にちゃんとTOEIC800という目標と期日を決めて、それを毎日意識しながら頑張れたのが本当に良かったと思っています。<br />
                                    <br />
                                    これだけやったんだから750とかで終わりたくない、「絶対に800取ってやる！」って思えました。自信がなかった私ですが、目標は高く持っていいんだなと思えました。ENGLISH CAMPにはいらなければ、なんとなく700取れればいいやと思ってだれていたと思います。<br />
                                    <br />
                                    担当者の方に毎日送っていた日報でも、日報を送ると「今日も英語の勉強ができた！」とモチベーションを維持できましたし、少しずつ自信が付きました。バイトで疲れちゃって「ちょっと今日無理〜」とか思ったときもあったんですが、担当者の方も励ましてくれてなんとか続けることができました。<br />
                                    <br />
                                    最初は日報も大変だったんですが、何週間か続けると、ここで終わりたくないという気持ちが芽生えてきて、疲れて寝落ちしちゃった時も、頑張って朝起きた時に日報と宿題を出したり、ちゃんと継続できましたね。担当者の方もめちゃくちゃ親身になって相談にのってくれて、いい意味で距離が近くて、本当に有難かったです！
                                </p>
                                <img src={voice24} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 07</span><br />
                                    ENGLISH CAMPに参加して英語学習にどの様な変化がありましたか？
                                </h3>
                                <p>
                                    英語でYouTubeの動画を見るようになったり、ネットフリックスとかでも字幕まで英語にしたりして、会話の表現をよくみるようになりましたね。レッスンで新しい表現を自分から使ってみたいと思ってる自分がいました。<br />
                                    <br />
                                    あとは日報があったおかげで6ヶ月間、毎日英語の勉強ができた。今までの自分では本当に考えられないです。自分からも英語でニュースを見たりしてインプット量も増えていって、英語が日常って感じでした！<br />
                                    <br />
                                    普段から英語だったらなんて言うんだろうって考えるようになったり、家で１人で英語を話したりしていました。トレーニングもめちゃくちゃためになったし、すごく楽しかったです。<br />
                                    <br />
                                    きっとENGLISH CAMPがなかったら自分ではできなかったですし、自分一人ではやらなかったものを課題にして出してもらえたので、ちゃんと実践できて、本当に自信になりました。<br />
                                    <br />
                                    あ！あとTOEICのListeningがめちゃくちゃ上がりました！模擬テストをやって、3回目くらいから急にListeningが聞こえるようになってきて、もともとあんなにできなかったのにびっくりしました。<br />
                                    <br />
                                    それでListeningも8割取れるようになって、すごく自信になったんです。この前もアナと雪の女王を英語で見たんですが、自然とだいたいの英語を理解できるようになっていて、一緒に見ていた母親に通訳してあげました（笑）<br />
                                    <br />
                                    TOEICの本番もめちゃくちゃ集中できましたし、カラスがめちゃくちゃ泣いていてうるさかったらしいけど、気が付かないくらい集中してました。私が目標にしてるTOEIC800をENGLISH CAMPのスタッフの人も一緒に追いかけてくれて、本気で頑張ろうって自分で決められてたからです。
                                </p>
                                <img src={voice25} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 08</span><br />
                                    ENGLISH CAMPに参加して英語力はどの様に変化しましたか？
                                </h3>
                                <p>
                                    Speakingは単語単語で会話していたものからちゃんと文章にして伝えられるようになって、以前よりスムーズに、流暢に、英語が出てくるようになりました。自信もついたし、以前よりももっと英語を話せるようになりたいと強く思う自分になれました。<br />
                                    <br />
                                    本当に、最初はレッスンでも当てられるのが恥ずかしかったけど、今は恥ずかしがらずに発音にも気をつけながら会話できるようになって自分でも驚いてます。<br />
                                    <br />
                                    あとはListeningが一気に聞こえるようになって、Readingの長文を読むのも、読むべきポイントをちゃんと見つけられるようになりました。英語が大好きだって胸張って言えます！<br />
                                    <br />
                                    それに本当に忙しくて、バイトが週4、サークルが週4あって、あんまり時間が無い中でも頑張れたのが自分の中では一番の変化です。<br />
                                    <br />
                                    今までは自己流の勉強して伸び悩んでいたけど、正しいやり方で実践すれば、短時間でも集中して英語力を伸ばせるんだなと思えました。
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="voice-section2 question-section odd last">
                        <div className="container sp-wi90">
                            <div className="voice-section2__container">
                                <h3 className="voice-section2__container__title">
                                    <span>Question 09</span><br />
                                    ENGLISH CAMPでの6ヶ月間の感想を教えてください。
                                </h3>
                                <p>
                                    本当に英語力が伸びたのもそうだけど、もっと英語を話せるようになりたいと思えたり、TOEICのスコアももっと上げたいって自信を持って思えるようになったのが本当に嬉しいです。<br />
                                    <br />
                                    そのために何をすればいいのかちゃんと担当に教わったので、やればやるだけ伸びるとわかったので、もっと向上させたいと思えたし、6ヶ月間、本当に楽しく英語が勉強できました。<br />
                                    <br />
                                    実際に英語を授業で話して、外国人講師に伝わったのが嬉しかったし、先生の行っていることが聞き取れてそれも嬉しくて、もっと頑張ろうと思って、とにかく英語がもっと大好きになりました！<br />
                                    <br />
                                    学校の授業だと大人数の授業なのであまり英語が伝わった時の嬉しさなどの実感がもてなかったけど、ENGLISH CAMPだと少人数制のグループレッスンだから一人ひとりにスポットライトが当たったのも、すごく力になりました。<br />
                                    <br />
                                    これからの目標は英語を使う仕事で働いていきたいです。きっともそれも達成できるって今の私なら胸を張って努力できます。<br />
                                    <br />
                                    今までは学校であるからTOEICを受けていたのですが、これからは自分のためにTOEICを受けて900を取りたいです！英検準１級も取りたいです！本当に夢がたっっっくさん広がりました！<br />
                                    <br />
                                    コーンの罰ゲームも楽しかったし、先生との出会いもあったし、レッスン後も外国人講師と一緒に帰ったり、世間話をしたりして、本当にとても楽しく通えました。<br />
                                    <br />
                                    中でも一番仲良くしてもらったミミ先生に会いに行きたいと思ってレッスンに参加したり、本当に充実して自分を成長させてくれた6ヶ月でした。ENGLISH CAMPに参加して本当に良かったです！<br />
                                    <br />
                                    TOEIC800も夢だと思っていたので、自分でもとれて本当にびっくりです。もう日本語がぐちゃぐちゃになっちゃったけど、それぐらい言いたいこともたくさんある、自分を変えてくれた環境です！
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

export default Voice2;