<div  align="left">

<img  width="200"  src="https://user-images.githubusercontent.com/78357979/162353071-06f178a6-aa24-4000-a6e1-52d969af78b0.png">

</div>

<br/>

  

## π SBank ?

  

<font  size="5"  color="orange">**SBank**</font> νλ‘μ νΈλ λμ§νΈ νΈλ μ€ν¬λ©μ΄μμ μμΈκ³μΈ΅(λΈλ ΉμΈ΅)μ μν AI μμ± λμ°λ―Έ μλΉμ€λ₯Ό μ μ©ν μ¬μ΄νΈλ‘ λ³΅μ‘ν μν μ¬μ΄νΈλ₯Ό μμ± λͺλ Ήμ ν΅ν΄ μ½κ² μ΄μ©ν  μ μλλ‘ μ μλμμ΅λλ€. 
<h3> π₯ Fornt-End </h3>
</br></br>

  

<img  width="1000px"  src="https://media.discordapp.net/attachments/950243921835991040/961824897049448458/version.gif">
</br></br>  

## π‘ Description
>  <h3><font  color="red">νλ‘μ νΈ κΈ°ν λ°°κ²½</font></h3>
<h5>νλ‘μ νΈ κΈ°ν λ°°κ²½μ λ€μκ³Ό κ°μ΅λλ€.</h5>
<ul>
<li>βοΈ3D μ¬λ μΊλ¦­ν° Soriμ μ¬μ©μμ μμ± μΈμμ ν΅ν΄ μνλ μλΉμ€λ‘ μλ΄ μ κ³΅νμ¬ λ³΄λ€ μ¬μμ§ μν μλΉμ€ μ΄μ© κ°λ₯</li>
<li>βοΈ3D μ¬λ μΊλ¦­ν° Soriμ TTS μλ΄λ‘ μ¬μ©μκ° μ§μ  μμ±μ λ£κ³  λ§νλ©° λ³΄λ€ μΉνμ μΈ μλΉμ€ μ΄μ© κ°λ₯</li>
<li>βοΈNaver CFR APIλ₯Ό μ¬μ©νμ¬ κ° κ°λ³ μ¬μ©μμ μΌκ΅΄μ μΈμνκ³  λΆμνμ¬ μ΄μ μ ν©ν λμ΄λ μνμ μΆμ²νμ¬ μλ΄</li>
</ul>
<br/>

>  <h3><font  color="green">μ£Όμ μλΉμ€ κΈ°λ₯</font></h3>

<h5>νλ‘μ νΈμ λν μλΉμ€λ λ€μκ³Ό κ°μ΅λλ€.</h5>
<ul>
<li>β­οΈ3D μΊλ¦­ν° **μλ¦¬**λ₯Ό ν΅ν μμ± μλ΄ λ° μΈμ</li>
<li>β­οΈμμ± λͺλ Ήμ ν΅ν μ¬μ΄νΈ μ£Όμ νμ΄μ§λ‘ μ΄λ</li>
<li>β­οΈμΌκ΅΄ μΈμμ ν΅ν μ°λ Ήλ³ κΈμ΅ μν μΆμ²</li>
</ul>
<br/>

  
  

## π§© Design

>  <h3><font  color="blue">ERD</font></h3>
<br/>

  

<img  width="1000px"  alt="αα¦αα΅αα₯αα¦αα΅αα³ERD"  src="https://user-images.githubusercontent.com/78357979/162355398-b100ee4d-1fdd-416a-8d34-d4952e244ca5.png">
<br/>

<img  width=1000  alt="μκ΅¬μ¬ν­λͺμΈμ"  src="https://media.discordapp.net/attachments/950243921835991040/961825623242833940/unknown.png?width=810&height=561"  >

<br/>

  
## π μ€λΉνκΈ°

  


- git clone https://lab.ssafy.com/s06-ai-speech-sub2/S06P22D201.git

- Frontend

```bash

docker build -t frontend ./frontend

docker run -d --name frontend -p 3000:3000 frontend

```

  

- Backend

- SpringBoot

```bash

gradle clean

gradle bootJar

docker build -t ./S06P22D201/backend/spring .

docker run -d --name backend -p 9000:9000 backend/spring

```

- FastAPI

```bash

sudo apt install -y docker.io

docker pull klbm126/kosbert_image:latest

docker run -d -i -t --name fastAPI -p 5555:5555 klbm126/kosbert_image:latest

docker exec -it fastAPI bash

git clone https://lab.ssafy.com/s06-ai-speech-sub2/S06P22D201.git

mv KoSentenceBERT_SKTBERT/ /S06P22D201/backend/fastapi

mv KoBERT/ /S06P22D201/backend/fastapi

mv ./S06P22D201/backend/fastapi/kobert/SemanticSearch.py ./S06P22D201/backend/fastapi/KoSentenceBERT_SKTBERT

pip install -e ./S06P22D201/backend/fastapi

pip install fastapi

pip install uvicorn[standard]

pip install python-multipart

conda install pytorch==1.7.1 torchvision==0.8.2 torchaudio==0.7.2 cudatoolkit=10.2 -c pytorch

conda install librosa

uvicorn main:app --reload --host=0.0.0.0 --port=5555

```

- DB(MySQL)

```bash

sudo docker pull mysql

sudo docker run --name mysql -e MYSQL_ROOT_PASSWORD=<"λΉλ°λ²νΈ"> -d -p 3306:3306 -v /home/ubuntu/mysql:/var/lib/mysql mysql:latest

docker exec -i -t mysql bash

mysql -u root -p

"μ€ν μ μ€μ ν λΉλ°λ²νΈ μλ ₯"

create database sbank default character set utf8mb4;

```
  

## π» μλΉμ€ μ£Όμ κΈ°λ₯

  

- λ‘κ·ΈμΈ νμκ°μ κ΄λ¦¬

- μμ± μΈμμ ν΅ν νμ΄μ§ μ΄λ

- μΌκ΅΄ μΈμμ ν΅ν μ°λ Ήλ³ λ§μΆ€ κΈμ΅ μν μΆμ²

- μκΈ, μ‘κΈ κΈ°λ₯

- μμ μ μλΉλ΄μ­ κ·Έλν νμΈ

  
  

---

  

## π  Dev Skills

  

<div  style="display:flex; justify-content: center;">

<p  align="left">

<a  href="https://ko.reactjs.org/">

<img src="https://img.shields.io/badge/React-17.0.2-blue?style=plastic&logo=react">

</a>

<a  href="https://ko.reactjs.org/">

<img src="https://img.shields.io/badge/javascript-6.0.0-yellow?style=plastic&logo=javascript">

</a>

<a  href="https://ko.redux.js.org/">

<img src="https://img.shields.io/badge/Redux-7.2.6-blue?style=plastic&logo=redux">

</a>

<a  href="https://ko.redux.js.org/">

<img src="https://img.shields.io/badge/axios-0.25.0-red?style=plastic&logo=axios">

</a>

</p>

<p  align="left">

<a  href="https://www.java.com/ko/">

<img src="https://img.shields.io/badge/JAVA-1.8-blue?style=plastic&logo=java">

</a>

<a  href="https://spring.io/">

<img src="https://img.shields.io/badge/spring_boot-2.3.2.RELEASE-brightgreen?style=plastic&logo=Spring">

</a>

<a  href="https://spring.io/projects/spring-security">

<img src="https://img.shields.io/badge/Spring_Security-5.4.6-brightgreen?style=plastic&logo=Spring">

</a>

<a  href="https://spring.io/projects/spring-data-jpa">

<img src="https://img.shields.io/badge/Spring%20Data%20JPA-4.3.1-brightgreen?style=plastic&logo=Spring">

</a>

<a  href="https://projectlombok.org/">

<img src="https://img.shields.io/badge/Lombok-1.18.12-red?style=plastic&logo=ProjectLombok">

</a>

<p  align="left">

<img src="https://img.shields.io/badge/fastAPI-0.75.1-green?style=plastic&logo=fastAPI">

<img src="https://img.shields.io/badge/pytorch-1.7.1-red?style=plastic&logo=pytorch">

<img src="https://img.shields.io/badge/torchaudio-0.7.2-red?style=plastic&logo=torchaudio">

<img src="https://img.shields.io/badge/cuda-10.2-green?style=plastic&logo=cuda">
</p>

</p>

<p  align="left">

<a  href="https://docs.aws.amazon.com/ec2/index.html?nc2=h_ql_doc_ec2">

<img src="https://img.shields.io/badge/AWS-EC2-orange?style=plastic&logo=amazon">

</a>

<a  href="https://www.docker.com/get-started">

<img src="https://img.shields.io/badge/docker-19.03.8-blue?color=blue&style=plastic&logo=docker">

</a>

<a  href="https://www.jenkins.io/">

<img src="https://img.shields.io/badge/Jenkins-2.263.4-%236DB33F?color=red&style=plastic&logo=Jenkins">

</a>

</p>

<p  align="left">

<a  href="https://www.atlassian.com/ko/software/jira/">

<img src="https://img.shields.io/badge/JIRA-Atlassian-blue?style=plastic&logo=jira">

</a>

<a  href="https://www.notion.so/9afd18e7efe54feba56f48c35a99270b">

<img src="https://img.shields.io/badge/Notion-2020.12-lightgrey?style=plastic&logo=notion">

</a>

</p>

</div>
  

## π¬ Documents

  

- π<font  color="green">  [Notion-Link](https://www.notion.so/280683b15ad84c9eb85ca17cf6f159d2?v=0cd541c3a61e44ce8ba64f2404d5b602)</font>

  
  

# π·License

  

<p>

This software is licensed under the MIT <a  href="https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp"  _blank="new">Β©SSAFY</a>.</p>
