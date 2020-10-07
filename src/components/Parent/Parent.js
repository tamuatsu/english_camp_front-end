
import React from 'react';
import '../First/First.css';
import merit from '../../images/merit-title.png';
import spmerit from '../../images/sp-merit-title.png';
import saraly from '../../images/saraly.png';
import graph from '../../images/sp-graph.png';
import hell from '../../images/hell.png';
import sakamoto from '../../images/sakamoto.png';
import comment from '../../images/comment.png';
import ishi from '../../images/ishi.png';
import eng from '../../images/english_scores.png';
import speng from '../../images/sp_english_score.png';

import Flow from '../Parts/Flow';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
    
const Parent = ({onRouteChange}) => {
    return (
        <Switch>
        <Route path="/Parent">
        <div>
            <h1 className="page_title parent">
                保護者の方へ
            </h1>
            <section className="breadcrumbs">
                <div className="container">
                    TOP ＞ 保護者の方へ
                </div>
            </section>
            <section className="reasons educa">
                <div className="container sp-wi90">
                    <div className="reasons__box">
                        <p className="reasons__box__description">
                            ENGLISH CAMPのホームページをご覧頂き誠にありがとうございます。<br />
                            <br />
                            国内留学プログラムENGLISH CAMPは2019年5月に立ち上がりました。<br />
                            <br />
                            こちらのページでは、<br />
                            <strong>・お子様が英会話習得後に得られるメリット<br /></strong>
                            <strong>・代表者より保護者様へのご挨拶<br /></strong>
                            <strong>・過去に参加された学生参加者様と保護者様の体験談の紹介<br /></strong>
                            を記載しております。<br />
                            <br />
                            保護者様へ少しでもENGLISH CAMPについてご理解頂ければと思っております。
                        </p>
                    </div>
                </div>
            </section>
            <section className="reasons edu">
                <div className="container sp-wi90">
                    <img className="mb80 pc" src={merit} alt="" />
                    <img className="sp" src={spmerit} alt="" />
                    <div className="reasons__box">
                        <div className="row spa-be al-fl-sta">
                            <div className="sp">
                                <div className="reasons__box__english">
                                    <h3>「日本の約7割の企業」が<br className="pc"/>採用時にTOEICスコアを参考にしていると回答</h3>
                                </div>
                            </div>
                            <div className="reasons__box__scores">
                                <img className="pc" src={eng} alt="" />
                                <img className="sp" src={speng} alt="" />
                            </div>
                            <div className="reasons__box__english">
                                <div className="pc">
                                    <h3>「日本の約7割の企業」が<br />
                                        採用時にTOEICスコアを参考にしていると回答</h3>
                                </div>
                                <p>
                                こちらの図は、「上場企業における英語活用実態調査」として、アメリカのニュージャージー州にある、世界最大の非営利テスト開発機関「ETS」が2013年に発表したデータです。これによると「日本の約7割の企業」が、採用時にTOEICの点数を参考にしていると回答しています。<br />
                                <br />
                                他にもTOEICのスコアは、実際に企業内での昇進や人事評価にも、大きな影響を与えています。例えば「富士通」や「松下電器（パナソニック）」、「三菱商事」などの大手企業のうち、国際関係の職種につく場合は「TOEIC：860点以上」が必須条件となっています。<br />
                                <br />
                                大企業への就職は、軒並み「TOIEC:700点以上」が必要とされている<br />
                                さらに国際関係の職種だけではなく、「ソフトバンク」では「730点以上」が必要とされていたり、シャープや資生堂、三菱電機やNTT東日本などの大企業でも、軒並み「700点以上」が必要とされています。<br />
                                （参考資料：大手企業採用基準TOEICスコア）<br />
                                <br />
                                このように企業側が就活をしている大学生や、実際に働いている方に対して「英語力の獲得が推進されている」というのは、すでに明らかだと思います。これは海外と取引のある会社だけでなく、企業内で海外の方を採用する可能性があることも考えると、どの企業に行くとしても必須です。
                                </p>
                            </div>
                        </div>
                        <h3 className="sp-mt60">
                            英語力が与える年収への影響
                        </h3>
                        <p className="reasons__box__description">
                            この図はエンワールド・ジャパンが日本における給料と英語の関係についての調査結果です。<br />
                            <br />
                            調査は英語を話せるバイリンガル求職者4085名を対象として実施されました。<br />
                            <br />
                            英語力を有しているバイリンガル求職者は全体平均を上回る給与水準で、20代で約1.5倍。30代で約1.7倍。40代以上では2倍以上の差が報告されました。
                        </p>
                        <p className="blockquote">
                            <span>参考記事</span><br className="sp" />https://news.mynavi.jp/article/20131112-a218/
                        </p>
                        <img src={saraly} alt="" className="mt60 mb3 pc"/>
                        <img src={graph} alt="" className="mt40 mb3 sp"/>
                        <p className="reasons__box__description left">
                            この様に、英語力がお子様の将来に及ぼす影響はとても大きいとENGLISH CAMPは考えています。
                        </p>
                    </div>
                </div>
            </section>
            <section className="reasons comp">
                <div className="container--inn">
                    <img src={hell} alt="" className="" />
                    <div className="row spa-be">
                        <div className="profile-box">
                            <img src={sakamoto} alt="" className="" />
                        </div>
                        <div className="profile-box">
                            <p className="profile-box__caption">ENGLISH CAMP 運営会社<br />株式会社PROGRESS代表</p>
                            <h2 className="profile-box__name">坂本凌太郎</h2>
                            <p className="profile-box__sub">経歴</p>
                            <p>
                                生年月日：1992年11月5日<br />
                                北海道函館中部高校卒業<br />
                                日本大学経済学部卒業<br />
                                アメリカ合衆国アラバマ州Auburn大学へ<br className="sp"/>1年間留学<br />
                                株式会社PROGRESS設立
                            </p>
                        </div>
                    </div>
                    <div className="profile-container">
                        <p>
                            初めまして。株式会社PROGRESS代表の坂本凌太郎です。<br />
                            <br />
                            ENGLISH CAMP HPをご覧頂き誠にありがとうございます。<br />
                            <br />
                            私達が運営するENGLISH CAMPが参加者へ最も伝えたい事は「英語を通して能力の習得の仕方を学んで頂く事」です。<br />
                            <br />
                            移り変わりの早い現代の中で、社会人として最も必要になるものは、社会に求められる能力をいかに早く確実に身につけて進化し続けられる人材になることです。<br />
                            <br />
                            現代では英語を話せることは日本人にとってメリットがありますが、10年後50年後は日本人も英語を話せるのが当たり前になっているかもしれません。翻訳機が発達して英語を話す必要が無くなるかもしれません。<br />
                            <br />
                            しかし、その時代によって、必ず求められる能力があるはずです。<br />
                            <br />
                            多くの方は英語が苦手、英語はできないと言います。<br />
                            しかし、それは本当に英語だからできないのでしょうか？<br />
                            <br />
                            ENGLISH CAMPは英語学習に才能は必要ないと考えています。<br />
                            <br />
                            日本語の方が単語数は多く、文法は複雑です。<br />
                            その日本語を流暢に話す日本人が、シンプルで簡単な英語を話せない、物理的な原因は無いと考えています。<br />
                            <br />
                            英語に限らず、能力を伸ばせない原因は<br />
                            ・やり方が間違っている。<br />
                            ・継続できない。<br />
                            ・環境整備ができていない。<br />
                            この3つが主な原因です。<br />
                            <br />
                            英語だから苦手だとか、できないのではありません。<br />
                            本当の原因はその人の中にあります。<br />
                            そしてそれは英語に限らず、何か伸ばしたい能力に挑戦する際に同じ壁にぶつかることになります。<br />
                            <br />
                            ENGLISH CAMPスタッフ一同は、参加者の方々と一緒に、それらの問題解決に努めていきます。<br />
                            <br />
                            そして、英語を話せるようになれば、選択肢や可能性が今よりも格段に広がり、次の目標や夢が見つかるはずです。<br />
                            <br />
                            ENGLISH CAMPで英語学習を通して成功体験を積み、自分に自信を持ち、次の目標や夢に挑戦し、進化し続けられる人間になって欲しいと考えています。<br />
                            <br />
                            そのきっかけの第一歩として、ENGLISH CAMPを是非活用してください。
                        </p>
                    </div>
                </div>
            </section>
            <section className="reasons voice">
                <div className="container sp-wi90">
                    <img src={comment} alt="" className="sp-80x" />
                    <h2 className="voice__section-title">
                        過去に参加された学生参加者様と<br className="pc"/>ご家族の方の体験談
                    </h2>
                    <h3 className="voice__section-sub-title">
                        <span>体験</span>者の声<br />
                        <img src={ishi} alt="" />
                    </h3>
                    <div className="voice__content">
                        <h4>
                            ENGLISH CAMP参加のきっかけはなんですか？
                        </h4>
                        <p>
                            昔から海外でキャビンアテンダントとして働く姉への憧れがあり、英語を話せるようになりたいと思っていました。<br />
                            <br />
                            ずっとスポーツに打ち込んできた僕と違って、姉は国際系の高校に通い、そこからアメリカの大学に進学して、卒業後、外資系の航空会社でキャビンアテンダントとして働いています。<br />
                            <br />
                            そんな姉から「海外の違う文化の人と話すことでいろんな価値観や世界観が得られた」という話を聞いて、自分もそういう経験をしてみたいと強く思いました。<br />
                            <br />
                            でも僕は学歴は無くて頭は良くないし、英語なんて全くできませんでした。<br />
                            <br />
                            専門学校でも英語の授業は皆無で、専門学校以外の環境で英語を身につけようと思い、高校3年生の終わりから大手英会話スクールに通いました。<br />
                            <br />
                            外国人と会話することは楽しかったのですが、週に1回だけレッスンを受けるだけで、それ以外で自分で英語を勉強することも無かったので、正直英会話力は全然上がりませんでした。<br />
                            <br />
                            当時は「本当に英語って話せるようになのかな？」と思っていて、自分が姉のように英語をペラペラに話せるイメージが全く持つことができませんでした。<br />
                            <br />
                            それで結局、専門学校で医療系の国家資格の勉強がとても忙しくなり、その大手英会話スクールも辞めてしまいました。<br />
                            <br />
                            その後、専門学校3年生の春にENGLISH CAMPに出会いました。<br />
                            <br />
                            最初は、英語に全く自信が無かったので「また上達しないんじゃないか？」と思っていたし、専門学校もわりと忙しいため、両立できるのか不安でした。<br />
                            <br />
                            それでもENGLISH CAMPの理念に共感して、参加を決めました。<br />
                            <br />
                            ENGLISH CAMPでは「まず英語を上達させるための自分作りからやっていこう。」と言ってもらえたことが、一番印象に残っています。<br />
                            そもそもの考え方から、英語の具体的な学習方法、レッスンの効果的な使い方、自宅での勉強方法も教えてもらって、英語の勉強の仕方がわからなかったり、結局継続できなくて英語を諦めてきた自分でも「変われるかもしれない。」と強く思い、参加を決心しました。<br />
                            <br />
                            結果が出るかは自分次第だとはわかっていたんですが、ここなら自分自身を変えることができて、成長できると思えたからですね。
                        </p>
                        <h4>
                            ENGLISH CAMPに参加して英語力に変化はありましたか？
                        </h4>
                        <p>
                            自分の考えや意見をちゃんと英語で伝えられるようになりました！本当に自分でも凄く上達したと実感しています。<br />
                            <br />
                            元々は外国人の人とはコミュニケーションが取れなかったり、自分の意見も言葉に詰まってしまい、単語の羅列でしか伝えられなかったのですが、今ではすらすら会話ができるようになりました。<br />
                            <br />
                            最近ENGLISH CAMPに参加した生徒さんたちにも<br />
                            <strong>「何でそんなに英語話せるんですか！？しゅんすけさんめちゃくちゃ英語話せますね！」</strong><br />
                            って言われてめちゃくちゃ嬉しかったです。（笑）<br />
                            <br />
                            僕も参加したての頃は僕も彼らと同じような状態だったのに、今の自分の英語力に本当に自分でもびっくりしています。<br />
                            <br />
                            この前も自宅で、久しぶりに日本に帰ってきた姉が突然英語で話しかけてきて、たぶん30分くらいずっと英語だけで会話してたんですが<br />
                            <strong>「しゅんすけ、いつの間にそんなに英語を話せるようになったの！？」</strong><br />
                            ってびっくりされちゃいました。（笑）<br />
                            <br />
                            僕は今、姉のように海外で働くことを目指しているんですが、<br />
                            <strong>「今のしゅんすけの英語力なら全然海外で働くのも通用するよ！」</strong><br />
                            と姉に言ってもらえて本当に本当に嬉しかったです。
                        </p>
                        <h4>
                            ENGLISH CAMPの感想を教えてください
                        </h4>
                        <p>
                            まず、一緒に英語を勉強したり切磋琢磨できる友達がたくさんできました！<br />
                            <br />
                            元々僕は英語を話すのも恥ずかしいし、失敗するのが凄く怖かったです。<br />
                            <br />
                            でも、ENGLISH CAMPには同じ目標を持った同世代の人がたくさんいて、レッスンやイベントに参加していく中で一緒に英語を勉強する仲の良い友達ができて、お互いにとても刺激になりました。<br />
                            僕の専門学校では英語を勉強している人はほとんどいなかったので、そんな自分にとってこの環境はとてもありがたいものでした。<br />
                            <br />
                            そして何より、ENGLISH CAMPで英語を勉強して、自分に自信を持つことができました！<br />
                            参加前は自分が英語を話せるようになるイメージが持てず、姉のように英語を使って海外で働くなんて、現実味がなく夢のまた夢だと思っていたんですが、今は海外で働くことがリアルに考えられるくらい、自分に自信が付きました。<br />
                            <br />
                            今は、「自分にできるかな？」という不安よりも「自分の英語を試してみたい！」と海外で働くことに挑戦することが楽しみになりました。<br />
                            <br />
                            実際僕は、今は整体の仕事をしているんですが、仕事をしながらお金を貯めて、来年オーストラリアでワーキングホリデーに1年間行く予定です。<br />
                            そこでマッサージの仕事をしながら海外のアスリートと関わって勉強することが今の僕の目標です。
                        </p>
                        <h4>
                            支えてくれたご家族の方へメッセージはありますか？
                        </h4>
                        <p>
                            ENGLISH CAMPへの参加を許可してくれて本当にありがとう。<br />
                            <br />
                            本当に成長できて、自分でもENGLISH CAMPに参加して本当に良かったと思ってる。<br />
                            <br />
                            当時は専門学校で忙しくてあまりバイトができなかったので、お金も建て替えてくれて本当にありがとう。なんか恥ずかしいですね。（笑）<br />
                            僕は親とはけっこう仲が良くて何でも話すので、ホームページのこのインタビューじゃなくてもENGLISH CAMPに通ってるときから、毎回レッスンから帰ってくるたびに伝えてましたよ。（笑）
                            挑戦させてもらえて、本当に親には感謝しています。お金も今社会人になってちゃんと返しています！
                        </p>
                    </div>
                    <h3 className="voice__section-sub-title second">
                        ご家族の方の声
                    </h3>
                    <div className="voice__content">
                        <h4>
                            お子様のENGLISH CAMPへの参加を許可して頂けた理由は何ですか？
                        </h4>
                        <p>
                        やはり、駿介の熱量ですかね。<br />
                        実際、体験レッスンから帰ってきたときの彼の顔が本当に活き活きとしていて、どんなレッスンだったのか、どんな勉強を教えてもらったのか、教室の雰囲気が和気あいあいだけど真剣だったことなど、本当に楽しかったんだなーというのが伝わってくるぐらい、嬉しそうだったんです。<br />
                        駿介を担当してくださったアドバイザーの方と話した内容も話してくれて、本当に私にも相談したことないぐらいの将来の相談とかを聞いてもらっていて、的確なアドバイスをもらったんだなというのがわかりました。<br />
                        その話を聞いていたら、それだけここで英語を学びたいんだと強く感じられたので、反対する理由はありませんでした。<br />
                        ただし、やはり最後の最後まで不安だったので、支払った費用は人生の勉強代として考えなさいということもきちんと伝えました。<br />
                        ですが、人生の勉強代としても許せる範囲でしたし、もし良くなかったと感じたらやめさせようとは考えていました。<br />
                        </p>
                        <h4>
                            ENGLISH CAMP参加後お子様の英語学習に変化はありましたか？
                        </h4>
                        <p>
                            本当に多くの変化を感じる瞬間がありました。友達もたくさんできたようで、毎回楽しく通っているのがわかりましたし、入会をさせて頂いてから、家でもよく勉強してました。<br />
                            <br />
                            もちろん何より、きちんと成果が表れていることで、きちんと勉強できてるんだなと実感できましたし、英語を本当に身に着けたいんだなと本人の意思を再確認できました。<br />
                            <br />
                            ちょうどENGLISH CAMPを卒業する頃、実際に海外で働いている姉と、英語で流暢に会話をして、お互いに楽しそうに笑い合ってるのを実際に聞いたときには、彼の上達ぶりに本当に驚きました。<br />
                        </p>
                    </div>
                    <div className="joint">
                        <p className="joint__title">
                            学生参加者在籍大学一覧
                        </p>
                        <p>
                            東京工業大学・千葉大学・横浜国立大学・埼玉大学・筑波大学・横浜市立大学・慶応大学・早稲田大学・上智大学・明治大学・青山学院大学・立教大学・中央大学・法政大学・日本大学・東洋大学・駒沢大学・専修大学・成蹊大学・成城大学・東京学芸大学・日本女子大学・東京女子大学・神奈川大学・日本体育大学・武蔵野大学・関東学院大学・麗澤大学・東海大学・帝京大学・立正大学・順天堂大学・東京メディカルスポーツ専門学校・東京医療保健大学など
                        </p>
                    </div>
                </div>
            </section>
            <Link to="/plan">
                <div className="button">
                    カリキュラム・料金を詳しく見る
                </div>
            </Link>
            <Link to="/voices">
                <div className="button mt40">
                    体験者の声
                </div>
            </Link>
        </div>
        </Route>
        </Switch>
    );
}

export default Parent;