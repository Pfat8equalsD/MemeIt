# Meme it de Batasev Andrei
## Table of contents

1. [Backend](#backend)
2. [Frontend](#frontend)
3. [How to run](#how-to-run)

## Backend

### Task 1
- am creat un Schema pentru user unde contine email username parola si o lista de references catre meme-urile create de acest user

- Am incercat sa adaug validatori custom de mongoose, doar ca s-a dovedit la tasku de validare ca imi trageam cu pistolul in genunchi, deoarece numai o singura eroare era returnata de validatori, chiar daca ai mai multi. Logic ca nefiind mazochist (sper) am decis sa iau metoda sclavului si sa fac ifurile manual

- Memurile au o descriere, un owner si un path catre imaginea acestuia

### Task 2

- get /memes a fost efectiv cel mai 200 IQ task, deci a fost atat de dificil incat inca transpir numai cand incerc sa il povestesc

- get /memes/:id a fost sa testeze faptul ca se pot folosi si parametrii in request

- la post si patch o chestie interesanta sa zic asa a fost validarea de user

- la delete /memes/:id I HAD ONE JOB, ONE JOB!! efectiv prajitu de mine sterge un meme din baza de date dar uita si de imaginea asociata acestuia... doamne ferestema

### Task 3
- Am folosit bcrypt ptr hashingul de parola la register. Mi-am pierdut juma de ora pe faptul ca bcrypt nu putea fara salt si credeam ca trebuia sa il stochez undeva.. bine ca s-a gasit unu in comentarii pe SO sa zica ca era concatenata direct in hash si functia compare tinea cont de asta

- Am folosit jwt tokens la logare. cool concept

### Task 4
- Stiu ca sunteti dezamagiti, si eu sunt dezamagit de mine, adica cum sa fac manual cu ifuri un task in 15 minute cand puteam sa pierd inca 5 ore sa fac validatorii sa mearga

- on a serious note now: DE CE ARRAY DE ERORI? smr cat am incercat sa fac validatorii de mongoose sa mearga cu asta...

### Task 5
- un if... ma rog mai multe ifuri si un middleware function. E bine ca tokenu ala e usor de verificat tho, si chiar forta ca nu trb stocat pe server nicaieri

### Task 6
- Imi place cum citisem restrictiile de png si 2MB la acest task si am zis hai sa ma documentez cum sa le aplic, am vazut cum; hai sa ma apuc de task acuma... BINE BA MERGE SE UPLOADEAZA! commit si dupa la revedere

- e bine ca am observat last second "modificati endpointul de creat memeuri" ca altfel inca ramanea la /post/:id pana la adanci batraneti

## Frontend
- Face hide and seek printre branchuri, solutia la punctul urmator
- 
-
-
-
-
-
- frontend-skeleton
- Ce frumos e navbarul care nu are aproape nicio functuinalitate
- Smr cand am vazut mema aia trimisa cu o ora inainte de deadline it hit different 

## How to run
- ignorati faptu ca sunt prajit si am pus si node_modules pe git, aflasem prea tarziu ca alea nu se trimit. anyway cred ca se da npm -i, dupa node start la frontend, node script.js la backend

Wow, you reached the end! there is a [Cookie](https://www.youtube.com/watch?v=dQw4w9WgXcQ)