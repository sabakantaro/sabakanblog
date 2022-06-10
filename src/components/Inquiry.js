import React from "react";
import SideWidget from "./SideWidget";

function Inquiry() {
  return (
    <header className="py-5 bg-light border-bottom">
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
            <div className="text-center">
              <div className="card mb-4">
                <div className="card-header">お問い合わせフォーム</div>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="氏名"
                      aria-label="氏名"
                    />
                  </div>
                  <div className="input-group mt-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="メールアドレス"
                      aria-label="メールアドレス"
                    />
                  </div>
                  <div className="input-group mt-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="タイトル"
                      aria-label="タイトル"
                    />
                  </div>
                  <div className="input-group mt-3">
                    <textarea
                      className="form-control"
                      type="textarea"
                      rows="5"
                      placeholder="メッセージ（本文）"
                      aria-label="メッセージ（本文）"
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary w-100" type="submit">
                送信
              </button>
            </div>
          </div>
          <SideWidget />
        </div>
      </div>
    </header>
  );
}

export default Inquiry;
