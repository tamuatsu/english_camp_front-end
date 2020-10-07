import Card from 'react-bootstrap/Card'
import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import '../First/First.css';
import ques from '../../images/ques-title.png';
    
const Question = ({onRouteChange}) => {
    return (
        <Accordion>
            <section className="question">
                <div className="container">
                    <img src={ques} alt="English campスマートフォンアイコン"/>
                    <div className="question__content">
                        <Accordion.Toggle variant="link" eventKey="0" className="question__content__q">
                            オンラインのみの受講は可能ですか？
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" className="question__content__a">
                            <Card.Body>はい、可能です。オンライン完結でレッスンのご参加やアドバイザーによるサポートを受けることができます。自宅にいながらENGLISH CAMPへ参加して英会話を習得することが可能です。スタジオのある東京、名古屋以外にお住まいの方もオンラインでの受講が可能です。</Card.Body>
                        </Accordion.Collapse>
                    </div>
                    <div className="question__content">
                        <Accordion.Toggle variant="link" eventKey="1" className="question__content__q">
                        入会後はどの様なスケジュールになりますか？
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1" className="question__content__a">
                            <Card.Body>各クラス、レッスン（１回５０分、全１２回）を週に１回受講して頂きます。レッスン以外の日は１日３０分〜１時間でできるトレーニングHWをご自宅にて実施していただきます。そして４レッスン終了ごとに実技テスト（全３回）を実施します。<br />また、フリーカンバセーションレッスン（１回５０分、全６回）はお好きな日程で受講可能です。期間は３ヶ月間です。</Card.Body>
                        </Accordion.Collapse>
                    </div>
                    <div className="question__content">
                        <Accordion.Toggle variant="link" eventKey="2" className="question__content__q">
                            外国人講師はどんな人ですか？
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2" className="question__content__a">
                            <Card.Body>アメリカ、イギリス、カナダ出身のネイティブの講師から、フィリピン、ポルトガル、スペインなど第二言語で英語を流暢に話すことができる講師が揃っています。<br />楽しく英会話をするのはもちろんのこと、しっかりあなたの英語力向上のサポートをしていきます。</Card.Body>
                        </Accordion.Collapse>
                    </div>
                    <div className="question__content">
                        <Accordion.Toggle variant="link" eventKey="3" className="question__content__q">
                            教材はどの様なものを使用しますか？
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3" className="question__content__a">
                            <Card.Body>レッスンで使用する教材からHWまでENGLISH CAMPオリジナル教材を使用します。<br />
                                        オリジナル教材に関しては無料カウンセリングの際に説明させていただきます。<br />
                                        ※TOEICテストのスコアアップ学習を希望の方は任意で当社がお勧めする市販教材を使用していただきます。</Card.Body>
                        </Accordion.Collapse>
                    </div>
                    <div className="question__content">
                        <Accordion.Toggle variant="link" eventKey="4" className="question__content__q">
                            英語が苦手な初心者ですが参加可能ですか？
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4" className="question__content__a">
                            <Card.Body>はい、可能です。ENGLISH CAMPでは入会時にレベルチェックテストを行い、現状レベルと目的に合わせて適正クラスをご案内します。また、専属アドバイザーが二人三脚で英語学習を進めていくので、英語学習の中で分からないことや不安なこともその都度解決できます。</Card.Body>
                        </Accordion.Collapse>
                    </div>
                    <div className="question__content">
                        <Accordion.Toggle variant="link" eventKey="5" className="question__content__q">
                            期間内に全プログラムが終わらなかったら延長できますか？
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5" className="question__content__a">
                            <Card.Body>はい、学習期間の延長は可能です。ご入会後に専属アドバイザーへご相談ください。</Card.Body>
                        </Accordion.Collapse>
                    </div>
                    <div className="question__content">
                        <Accordion.Toggle variant="link" eventKey="6" className="question__content__q">
                            途中で辞めることができますか？
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6" className="question__content__a">
                            <Card.Body>はい、可能です。中途解約制度がございます。無料カウンセリングの際に書面と合わせてご説明させていただきます。ご不明点はアドバイザーにご相談ください。</Card.Body>
                        </Accordion.Collapse>
                    </div>
                    <div className="question__content">
                        <Accordion.Toggle variant="link" eventKey="7" className="question__content__q">
                            未成年でも参加できますか？
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7" className="question__content__a">
                            <Card.Body>はい、可能です。参加希望者が未成年者の場合はご契約書面と別途、親権者様に親権者同意書のご記入をお願いしております。</Card.Body>
                        </Accordion.Collapse>
                    </div>
                    <div className="question__content">
                        <Accordion.Toggle variant="link" eventKey="8" className="question__content__q">
                            入会前にレッスンの体験はできますか？
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="8" className="question__content__a">
                            <Card.Body>はい、可能です。無料カウンセリングの際にご希望の方は外国人講師と５０分間の無料体験レッスンを受講することが可能です。無料体験レッスンはオンラインでも受講可能です。ぜひご参加ください！無料カウンセリングについてはこちらから。</Card.Body>
                        </Accordion.Collapse>
                    </div>
                </div>
            </section>
        </Accordion>
    );
}

export default Question;