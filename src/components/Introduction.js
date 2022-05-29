import React from "react";
import SideWidget from "./SideWidget";

function Introduction() {
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
            <div className="card-body">
              <h1>自己紹介</h1>
              <div className="lead">
                <h4 className="mt-5 mb-5">「筋肉は裏切らない」</h4>
                <p>
                  初めまして、さばかんたろうと申します。
                  <br />
                  シュワちゃんやドウェインジョンソンなどのハリウッド映画に出るようなマッチョに憧れて日々筋トレをしてます。
                  <br />
                  筋トレを始めたきっかけはガリガリで弱そうな自分が嫌だったからです。
                  <br />
                  高校時代から自宅での筋トレを始め、大学ではジムに通ってひたすら鍛え、周りからはマッチョと言ってもらえるくらいには成果は出てきたのですが、社会人になってあることに気がつきます。
                  それは、何年も鍛え続けているのに全く筋肉が付かないのです。
                  <br />
                  服を着ると筋肉は見えませんし、内気なタイプなので筋トレをしていることを周りに話すと「意外だった」と驚かれます・・・
                  <br />
                  そんなことを言われた悔しさで毎日ジムに通って2時間ほど筋トレをし続けましたが、体重は全然増えず、痩せた見た目は変わりませんでした。
                  <br />
                  「痩せているのは生まれつきだから仕方ない」と諦めていたころ、ちょうどYouTubeの動画を漁っており、山本義徳さんやカネキンさんなどのマッチョな方々が筋トレを解説する様子を眺めておりました。
                  そこでどうせやるなら1度くらい本気でやってみようかと思い、カロリー計算や筋肥大のシステムなどを調べて自分の筋トレプログラムを作り実践しました。
                  <br />
                  すると2ヶ月ほどで見てわかるくらい筋肉が大きくなっているのを実感でき、スーツを着ていても周りから「腕が太くなった」とか、「キレイな逆三角形になったね」と言ってらえるようになりました。
                  これは本当に嬉しくて、自分が学んだこと、実践したことを記録に残していきたいと思いブログをはじめました。
                  <br />
                  自分と同じく体型にコンプレックスがあったり、自分に自信が持てなかったり・・・少しでもそんな人の励みになれたらと願いながら執筆をいたします。
                  <br />
                  まだまだ始めたばかりで、未熟なところや間違っていることもあるかもしれませんが、何かあればぜひぜひコメントいただけますと幸いです。
                  <br />
                  筋トレなどの学びや実践を執筆していきますので、どうぞよろしくお願いいたします。
                </p>
              </div>
            </div>
          </div>
          <SideWidget />
        </div>
      </div>
    </header>
  );
}

export default Introduction;
