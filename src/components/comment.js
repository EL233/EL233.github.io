import React from 'react';
import Giscus from '@giscus/react';

export const Comment = () => {
  return (
    <div style={{ paddingTop: 50 }}>
      <Giscus
        id="comments"
        // 以下部分参考 Giscus 生成的代码填写
        src="https://giscus.app/client.js"
        repo="EL233/EL233.github.io" 
        repoId="R_kgDOMtPrGw" 
        category="General"
        categoryId="DIC_kwDOMtPrG84CiOLb"
        mapping="title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark_tritanopia"
        lang="zh-CN"
        loading="anonymous"
      />
    </div>
  );
};

export default Comment;