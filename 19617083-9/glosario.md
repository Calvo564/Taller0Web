
Acontinuacion se definiran los comandos y conceptos enunciados en el Taller 0.

a)Control de versiones (VC):
Corresponde a un sistema el cual permite almacenar los cambios que han de haber durante el desarrollo de un proyecto a lo largo del tiempo de modo que en caso de haber errores o un punto de no retorno en el proyecto, existan versiones anteriores a las que se pueda acceder de manera de poseer una copia segura de la ultima actualizacion funcional del programa.

Fuente: https://git-scm.com/book/es/v1/Empezando-Acerca-del-control-de-versiones

b)Control de versiones distribuido(DVC):
Es un medio que permite a multiples programadores e individuos para trabajar en un mismo proyecto sin poseer una red comun donde las distintas versiones son guardadas en un sistema de controles distribuidos.

Fuente:https://es.m.wikipedia.org/wiki/Control_de_versiones_distribuido

c)Repositorio Remoto y Repositorio Local:

R.Remoto: Hace referencia a un repositorio almacenado en algun punto de internet, desde una red hasta un servidor privado por lo cual se puede acceder a el desde distintos dispositivos remotamente, estos pueden ser de lectura o escritura (o ambos), dependiendo de cual tipo sea dependera la capacidad de edicion que tengan la gente con la que se comparte el proyecto.

R.Local: Las modificaciones nombradas en la anterior definicion se pueden llevar a cabo en un Repositorio local el cual es el que se enuentra en nuestro equipo o dispositivo de trabajo, a traves de los comandos push/pull dependiendo si es para enviar o recibir datos podemos realizar ediciones.

Fuentes: https://git-scm.com/book/es/v1/Fundamentos-de-Git-Trabajando-con-repositorios-remotos

https://colaboratorio.net/atareao/developer/2017/git-y-github-trabajando-con-repositorios-locales/


d)Copia de trabajo / Working Copy:
Corresponde al proceso por el cual podemos relizar una copia de nuestro entorno de desarrollo, es decir el repositorio local en el cual nos encontramos, del cual se crea una copia para sus posteriores modificaciones, las cuales se pueden llevar a cabo de Textastic (editor te texto/codigo).

Fuente:https://workingcopyapp.com/users-guide

e)Area de preparacion / Staging Area:
Es un archivo simple en el cual se encuentran informacion acerca de las futuras ediciones que se realizaran a traves del comando 'commit',si bien su nombre es estandar tambien se le conoce como 'index'.

Fuente:https://git-scm.com/book/en/v1/Getting-Started-Git-Basics

f)Preaparar cambios / State Changes:
Es el estado en el que se realizan cambios al repositorio de manera de poder llevar un registro de las distintas modificaciones y versiones.


g)Confirmar Cambios:Es cuando se da la aprovacion de las modificaciones efectuadas.

h)Commit:
Corresponde a una revision/actualizacion de a un archivo o a un conjunto de ellos, el cual permite llevar un registro de cuando se realizaron cambios o por quien, ademas de que generalmente dichas ediciones pueden ser acompañadas por comentarios respecto a lo que se realizo.

Fuente:https://help.github.com/en/articles/github-glossary

i)Clone:
Comando a travez de el cual se pueden crear distintaws copias de un poyecto a nuestro servidor local, de manera de poseer fexibilidad a la hora de desarrollar nuestro proyecto.

Fuente:https://stackoverflow.com/questions/5143119/what-does-this-mean-clone-the-github-repository

j)Pull:
Permite descargar las ultimas modificaciones que se han realizado en un proyecto de manera de poder actualizar nuestro R.Local desde el remoto.

Fuente:https://help.github.com/en/articles/about-pull-requests

k)Push:
A diferencia de 'pull', este comando se utiliza para cargar contenido desde el repositorio local a el repositorio remoto, estos cambios pueden se acompañados de un comentario que contenga la informacion acerca de las edicinoes echas.

Fuente:https://www.hostinger.es/tutoriales/comandos-de-git

l)Fetch:
Comando a travez del cual se pueden observar los ultimos cambios realizados a un repositorio, de manera de poder comparar las distintas versiones guardadas con la que uno posee en el dispositivo donde esta nuestro Repositorio local.

Fuente:https://help.github.com/en/articles/fetching-a-remote

m)Merge:
Permite tomar los cambios realizados en una rama del repositorio y aplicarlos en otro, proceso que se lleva a cabo con una solicitud proveniente del comando 'pull' (aunque existen ciertas restricciones dependiendo de las modificaciones realizadas).

Fuente:https://help.github.com/en/articles/github-glossary

n)Status:
Permite ver la lista de archivos que se han editado en el repositorio de manera de poder verificar y confirmar con seguridad los datos que fueron afectados.

o)Log:Comando que permite recuperar informacion acerca de mensajes y codigos efectuados.

Fuente:https://help.github.com/en/articles/about-status-checks

p)Checkout:
Comando por el cual puedes navegar entre ramas creadas por git branch. 

Fuente:https://stackoverflow.com/questions/15595778/github-what-does-checkout-do

q)Rama / Branch:
Corresponde a una forma de seguir desarrollando en repositorio aisladamente, de manera de poder trabajar con seguridad de que exista una copia de la ultima version funcional del proyecto (los repositorios pueden tener varias ramas ademas de poder combinarse).

Fuente:https://help.github.com/en/articles/github-glossary

r)Etiqueta / Tag:
Las etiquetas se usan cuando uno desea apuntar a una version especifica del repositorio debido a la informacion que en ellas se encuentra escrita.

Fuente:https://help.github.com/en/articles/working-with-tags
