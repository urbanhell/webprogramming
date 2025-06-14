document.addEventListener('DOMContentLoaded', () => {
  const aboutContent = document.getElementById('aboutContent');
  const titleElem = document.querySelector('.about-title');

  const pageParam = new URLSearchParams(window.location.search).get('page') || 'intro';

  const contentMap = {
    intro: {
      title: '',
      body: `
          <!-- 사이트 소개 -->
          <section class="intro-about">
            <h2>🕯️ 우리 사이트는…</h2>
            <p>
              괴담지옥은 단순한 이야기 모음이 아닙니다.  
              한국 괴담부터 해외 괴담, 실제 목격담까지  
              <strong>다양한 공포 스펙트럼</strong>과,
              <strong>사용자 참여형 콘텐츠</strong>를 통해
              <em>‘특별한 경험’</em> 을 선사하는 공간이에요.
            </p>
          </section>
        
          <!-- 주요 기능 -->
          <section class="intro-features">
            <h2>🔍 주요 기능</h2>
            <ul class="features-list">
              <li>
                <span class="feature-image" style="
                display:inline-block;
                width:100%;
                height:60%;
                background-image: url('image/photo-genre.webp');
                background-size: cover;
                background-position: center;
                border-radius:8px;
                "></span>
                <strong>다양한 장르</strong><br>
                한국 괴담·해외 괴담·실화 이야기·사용자 제보까지  
                <em>모든 공포 장르를 한눈에.</em>
              </li>
              <li>
                <span class="feature-image" style="
                display:inline-block;
                width:100%;
                height:60%;
                background-image: url('image/photo-submit.webp');
                background-size: cover;
                background-position: center;
                border-radius:8px;
                "></span>
                <strong>사용자 제보</strong><br>
                당신이 직접 경험한 기이한 사건도  
                <em>언제든 제보</em>하고 공유할 수 있어요.
              </li>
              <li>
                <span class="feature-image" style="
                display:inline-block;
                width:100%;
                height:60%;
                background-image: url('image/photo-audio.webp');
                background-size: cover;
                background-position: center;
                border-radius:8px;
                "></span>
                <strong>몰입형 오디오</strong><br>
                공포 내레이터와 배경음악으로  
                <em>현장감 100%</em>를 느껴보세요.
              </li>
              <li>
                <span class="feature-image" style="
                display:inline-block;
                width:100%;
                height:60%;
                background-image: url('image/photo-curation.webp');
                background-size: cover;
                background-position: center;
                border-radius:8px;
                "></span>
                <strong>큐레이션 & 분류</strong><br>
                주제·난이도·인기 필터로  
                <em>내 취향에 딱 맞는 이야기</em>만 쏙쏙.
              </li>
              <li>
                <span class="feature-image" style="
                display:inline-block;
                width:100%;
                height:60%;
                background-image: url('image/photo-community.webp');
                background-size: cover;
                background-position: center;
                border-radius:8px;
                "></span>
                <strong>실시간 소통</strong><br>
                댓글·좋아요로  
                <em>다양한 사용자들과</em> 즐겨보세요.
              </li>
            </ul>
          </section>
        
          <!-- 참여 유도 -->
          <section class="intro-cta">
            <h2>지금 바로 체험해 보세요!</h2>
            <p>방을 어둡게 하고, 헤드폰을 끼워 보세요.  
               괴담지옥이 준비한 무서운 밤이 시작됩니다.</p>
            <a href="urban.html?filter=all" class="btn btn-primary">전체 괴담 보기</a>
          </section>
        </main>
      `
    },
    greeting: {
      title: '',
      body: `
            <section style="max-width: 900px; margin: 3rem auto; padding: 2rem; background-color: #111; border-radius: 1rem; box-shadow: 0 0 15px rgba(255, 0, 0, 0.15); color: #eee; line-height: 1.7; font-size: 1.05rem;">
              <h2 style="font-size: 1.6rem; margin-bottom: 1.2rem; border-bottom: 1px solid #333; padding-bottom: 0.5rem;">👻 운영자 인사말</h2>
              
              <p style="margin-bottom: 1.2rem;">
                안녕하세요. <strong style="color: #e01c1c;">괴담지옥</strong>을 운영하는 <strong>오하준</strong>, <strong>이준혁</strong>, <strong>권오현</strong>입니다.
              </p>
            
              <p style="margin-bottom: 1.2rem;">
                저희는 어릴 적 친구들과 둘러앉아 나누던 오싹한 이야기들, 밤마다 생각나 잠 못 들게 만들던 소문들, 그리고 그때의 아찔한 감정들을 잊지 못해 이 공간을 만들게 되었습니다.
              </p>
            
              <p style="margin-bottom: 1.2rem;">
                <strong style="color: #e01c1c;">괴담지옥</strong>은 단순히 괴담을 모아 보여주는 페이지가 아닙니다. 누구나 공포를 공유하고, 소통하고, 함께 즐길 수 있는 살아 있는 커뮤니티입니다.
              </p>
            
              <p style="margin-bottom: 1.2rem;">
                익명의 사용자들이 제보하는 실화 괴담, 창작 이야기, 도시전설은 물론, <span style="color: #f2f2f2;">음성 나레이션</span>과 <span style="color: #f2f2f2;">몰입도 높은 BGM</span>까지 더해져, 더 깊고 현실감 있는 공포 체험이 가능하도록 구성하고 있습니다.
              </p>
            
              <p style="margin-bottom: 1.2rem;">
                무엇보다 이곳은 무서운 이야기를 소비하는 데 그치지 않고, <strong>기억을 나누고 감정을 공감하며 함께 ‘지옥’을 만들어가는 공간</strong>입니다.
              </p>
            
              <p style="margin-bottom: 1.2rem;">
                저희 운영진은 진심을 담은 콘텐츠만을 소개하겠다는 약속 아래, 매 게시글과 피드백에 정성을 다하고 있으며, <strong style="color: #e01c1c;">공포를 매개로 한 교류와 창작이 활발히 이루어지는 특별한 장소</strong>가 되도록 지속적으로 개선하고 성장해 나가겠습니다.
              </p>
            
              <p style="margin-bottom: 1.5rem;">
                누군가에게는 지나간 이야기일 수 있지만, 누군가에게는 지금 이 순간에도 계속되고 있는 이야기일 수 있습니다.
              </p>
            
              <p style="margin-bottom: 0.5rem;">
                <strong>이곳 괴담지옥에서 여러분만의 이야기를 함께 나눠주세요.</strong>
              </p>
            
              <p>
                그리고 무서운 밤 속에서도, <span style="color: #f2f2f2;">누군가와 함께 있다는 위안</span>과 <span style="color: #f2f2f2;">짜릿한 전율</span>을 느껴보시기 바랍니다.
              </p>
          </section>
      `
    },
    contact: {
      title: '문의/제보하기',
      body: `
      <div style="margin-top: 2.5rem; padding: 1.2rem 1.5rem; background-color: #111; border-left: 4px solid crimson; border-radius: 0.5rem; box-shadow: 0 0 10px rgba(255,0,0,0.2); color: #eee; font-size: 1.05rem; line-height: 1.6;">
        문의사항이나 괴담 제보는 아래 이메일로 보내주세요.<br>
        <strong style="color: #ff4d4d; font-size: 1.1rem;">webprogram25@gmail.com</strong>
      </div>
  `
    }
  };

  const selected = contentMap[pageParam] || contentMap.intro;

  if (titleElem) titleElem.textContent = selected.title;
  if (aboutContent) aboutContent.innerHTML = selected.body;

  const aboutMenu = document.getElementById('aboutMenu');
  if (aboutMenu) {
    aboutMenu.querySelectorAll('.submenu a').forEach(link => {
      link.addEventListener('click', function(e){
        e.preventDefault();
        const url = new URL(this.href);
        const newPage = url.searchParams.get('page') || 'intro';
        const newData = contentMap[newPage] || contentMap.intro;
        window.history.pushState({}, '', url.pathname + url.search);
        if (titleElem) titleElem.textContent = newData.title;
        if (aboutContent) aboutContent.innerHTML = newData.body;
      });
    });

    window.addEventListener('popstate', () => {
      const newPage = new URLSearchParams(window.location.search).get('page') || 'intro';
      const newData = contentMap[newPage] || contentMap.intro;
      if (titleElem) titleElem.textContent = newData.title;
      if (aboutContent) aboutContent.innerHTML = newData.body;
    });
  }
});
