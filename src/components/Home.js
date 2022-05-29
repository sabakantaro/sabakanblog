import React from "react";
import SideWidget from "../components/SideWidget";
import ArmCurl from "../assets/img/image-arm_curl.jpeg";
import BodyBuilder from "../assets/img/image-bodybuilder.jpeg";
import DeadLift from "../assets/img/image-deadlift.jpeg";
import LegWorkout from "../assets/img/image-leg_workout.jpeg";
import Protein from "../assets/img/image-protein.jpeg";

function Home() {
  return (
    <header className="py-5 bg-light border-bottom mb-4">
      <div className="container">
        <div className="text-center my-5">
          <h1 className="fw-bolder">さばかんブログ</h1>
          <p className="lead mb-0">
            やせ型が効率よくバルクアップする情報を発信
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <a href="#!">
                <img
                  className="card-img-top"
                  width={850}
                  height={350}
                  src={Protein}
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="small text-muted">2021年6月26日</div>
                <h2 className="card-title">
                  【筋肥大を加速させる！？】Eルチンとは？
                </h2>
                <p className="card-text">
                  どうも、さばかんたろうです。
                  今回は最近よく耳にするEルチンについて解説します。
                  この記事を読めば、 「Eルチンとは何か？」
                  「どんな作用があるのか？」 「どうやって摂取した ...
                </p>
                <a className="btn btn-primary" href="#!">
                  記事を読む →
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card mb-4">
                  <a href="#!">
                    <img
                      className="card-img-top"
                      width={750}
                      height={350}
                      src={ArmCurl}
                      alt="..."
                    />
                  </a>
                  <div className="card-body">
                    <div className="small text-muted">2021年6月20日</div>
                    <h2 className="card-title h4">
                      【科学的に正しいバルクアップ術】腕のトレーニング方法
                    </h2>
                    <p className="card-text">
                      どうも、さばかんたろうです。
                      今回は脚のトレーニングについて解説いたします。
                      「カッコイイ身体づくりに下半身の筋肉はいらないんじゃないか・・・？」
                      「脚を鍛えてるとどんなメリットがあるのか？」
                    </p>
                    <a className="btn btn-primary" href="#!">
                      記事を読む →
                    </a>
                  </div>
                </div>
                <div className="card mb-4">
                  <a href="#!">
                    <img
                      className="card-img-top"
                      width={750}
                      height={350}
                      src={DeadLift}
                      alt="..."
                    />
                  </a>
                  <div className="card-body">
                    <div className="small text-muted">2021年6月13日</div>
                    <h2 className="card-title h4">
                      【科学的に正しいバルクアップ術】筋肥大に最適なトレーニングの組み方
                    </h2>
                    <p className="card-text">
                      どうも、さばかんたろうです。
                      今回は科学的に正しい筋肥大に特化したトレーニングの組み方を解説いたします。
                      この記事を読むと、
                      「筋トレ方法がいろいろありすぎて何をやったらいいかわからない」
                    </p>
                    <a className="btn btn-primary" href="#!">
                      記事を読む →
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card mb-4">
                  <a href="#!">
                    <img
                      className="card-img-top"
                      width={750}
                      height={350}
                      src={BodyBuilder}
                      alt="..."
                    />
                  </a>
                  <div className="card-body">
                    <div className="small text-muted">2021年6月19日</div>
                    <h2 className="card-title h4">
                      【実践、筋トレテクニック】時短もできるスーパーセットの効果
                    </h2>
                    <p className="card-text">
                      どうも、さばかんたろうです。
                      今回は筋トレにとても便利なスーパーセットを紹介いたします。
                      時間がないサラリーマン、なかなかバルクアップしにくいやせ型の方、効率よく筋肉をつけたいトレーニーなど...
                    </p>
                    <a className="btn btn-primary" href="#!">
                      記事を読む →
                    </a>
                  </div>
                </div>
                <div className="card mb-4">
                  <a href="#!">
                    <img
                      className="card-img-top"
                      width={750}
                      height={350}
                      src={LegWorkout}
                      alt="..."
                    />
                  </a>
                  <div className="card-body">
                    <div className="small text-muted">2021年6月12日</div>
                    <h2 className="card-title h4">
                      【実践、筋トレテクニック】筋肥大を加速するPOF法
                    </h2>
                    <p className="card-text">
                      どうも、さばかんたろうです。
                      いきなりですが、筋肉はずっと同じ刺激を与えていてもうまく育たないことはご存知でしょうか？
                      身体はホメオスタシスというホルモンによって同じ状態を維持できるようにコントロール...
                    </p>
                    <a className="btn btn-primary" href="#!">
                      記事を読む →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <nav aria-label="Pagination">
              <hr className="my-0" />
              <ul className="pagination justify-content-center my-4">
                <li className="page-item disabled">
                  <a
                    className="page-link"
                    href="#"
                    aria-disabled="true"
                  >
                    ◁
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#!">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    3
                  </a>
                </li>
                <li className="page-item disabled">
                  <a className="page-link" href="#!">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    15
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    ▷
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <SideWidget />
        </div>
      </div>
    </header>
  );
}

export default Home;
