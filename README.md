[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/v4VHUSr5)
# hw6-connecting-to-a-backend
This is the starter code of [2023-Programming User Interface Homework](https://hackmd.io/@akairisu/Sy8CUT3m3)




# 姓名
- 羅寶瑩
- Po Ying,Law

# 實作的網站
> 你 deploy 的網站連結

https://darling-halva-e7e4b8.netlify.app/

# 漏洞
> 如果你在 HW4 的實作中保留了任何漏洞或問題，並且沒有修復，請列出它們，我們不會因此扣分，所以你可以專注於新的部分。

N/A

# 加分作業項目
> 你所實作的加分作業項目

### Display More
- The `Display More` button is shown whenever there are search results in the "CREATE FROM PICTURE" section.
- Clicking the "Display More" button will display 10 new images.
![](https://hackmd.io/_uploads/B1bzdvkLh.gif)


# 連結後端
> 請討論你連結後端的方法及使用時遇到的困難或感到困惑的部分。
這次作業使用firebase去連結後端
1. Login System
    - Method: Firebase's authentication feature was used to implement the login system.
    - Difficulty: Understanding the usage.
2. Database
- Method: The database was implemented using Firebase's Firestore database. Firstly, a "users" collection was created, and within it, a new collection was created for each user based on their UID to ensure that each user has their own shopping cart contents. Then, a new collection is created each time an item is added to the cart to store the details of the purchased item (e.g., color, size, quantity, etc.). For display purposes, a listener is used to monitor changes in the database and update the shopping cart display in real time.
- Difficulty: Besides taking some time to understand how to use Firestore functions, understanding the structure of Firestore was also a challenge.

# (加分)你實作的網站中與提出的作業規範不同之處，並請提出你的理由。另外，想要針對作業提出的規範作調整前請先與助教聯繫。
N/A
