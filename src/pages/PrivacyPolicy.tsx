import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-lg py-xl text-text">
      <h1 className="text-3xl font-light mb-lg text-primary tracking-wider uppercase">Privacy Policy</h1>
      <div className="space-y-md text-sm leading-relaxed text-text-muted">
        <p>Hair Resort Lino（以下、「当店」といいます）は、お客様の個人情報の重要性を深く認識し、以下の通りプライバシーポリシーを定めます。</p>
        
        <h2 className="text-xl font-medium text-text mt-lg mb-sm">1. 個人情報の定義</h2>
        <p>本プライバシーポリシーにおける「個人情報」とは、個人情報保護法に定める個人情報を指します。</p>

        <h2 className="text-xl font-medium text-text mt-lg mb-sm">2. 個人情報の収集</h2>
        <p>当店は、予約受付やお問い合わせ等に関し、必要最小限の範囲でお客様の個人情報を収集いたします。</p>

        <h2 className="text-xl font-medium text-text mt-lg mb-sm">3. 個人情報の利用目的</h2>
        <p>収集した個人情報は、サービスの提供、予約管理、お問い合わせへの回答のみに利用いたします。</p>

        <h2 className="text-xl font-medium text-text mt-lg mb-sm">4. 第三者への開示</h2>
        <p>お客様の同意がある場合、または法令に基づく場合を除き、個人情報を第三者に開示いたしません。</p>
      </div>
    </div>
  );
};
