# 동시 편집 에디터 구현하기
## 2. 동시 편집을 어떤걸로 처리할까?
### 💁 동시 편집은 어떻게 구현할 수 있을까? OT, CRDT는 무엇일까?
#

Google Docs를 아시나요? Google Docs는 여러 사람이 동시에 하나의 문서를 수정할 수 있습니다. 그럼에도 문서의 내용은 서로 같아집니다. (이러한 특징을 수렴, Convergence이라고 합니다)  
Google Docs와 같은 실시간 협업 서비스는 어떻게 동작하는 걸까요? 그리고 동시 편집 에디터는 어떻게 구현하면 좋을까요?  
#

> ### 🙋 어떻게 Google Docs는 여러 사람이 동시에 수정해도 문서의 내용이 같아지는 건가요? (OT, Operational Transformation)

### Optimistic replication(낙관적 복제)
Google Docs는 우리가 사용하는 Git의 구조와 비슷합니다.   
Git은 우리가 작업한 변경사항을 Local 저장소에 Commit하고 작업이 완료되면 다른 참여자에게 작업한 내용을 공유하기 위해서 Remote 저장소에 Commit한 작업물을 Push합니다.  
만약에 Remote 저장소에 먼저 추가된 또 다른 Commit이 있다면 해당 브런치를 Pull합니다. 이 때 Merge conflict가 발생한다면 직접 해결합니다.  

이런 복제 전략을 취한 시스템을 **Optimistic replication system** 이라고 합니다.  
Optimistic replication은 복제본의 내용이 잠시 달라지는 것을 허용하는 복제 전략입니다.
