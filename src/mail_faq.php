<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$userEmail = $_POST['emailfaq'];
$userMessage = $_POST['messagefaq'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "Форма успешно отправлена";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'Логин на почте'; // Логин на почте
    $mail->Password   = 'Пароль на почте'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('web.dev.a1exweb@gmail.com', 'Александр Ярославцев'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('a1exweb@mail.ru');  
    // -----------------------
    // Само письмо
    // -----------------------
    $mail->isHTML(true);

    $mail->Subject = 'Пришёл вопрос, нужно ответить!';
    $mail->Body    = "<b>Почта:</b> $userEmail <br>
    <b>Вопрос:</b> $userMessage";
// Проверяем отравленность сообщения
if ($mail->send()) {
    // header('Location: thanks.php');
    echo 'Форма успешно отправлена';
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// header('Location: thanks.php');