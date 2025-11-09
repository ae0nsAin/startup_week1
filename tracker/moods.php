<?php include('header.php'); ?>

<main>
<?php
// 带参数的函数，根据心情返回回应
function getMoodMessage($mood) {
    if ($mood == "Happy") {
        return "That's awesome! Keep smiling 😊";
    } elseif ($mood == "Sad") {
        return "It's okay to feel sad sometimes 💙";
    } elseif ($mood == "Excited") {
        return "Wow! Hope something great happened 🎉";
    } elseif ($mood == "Tired") {
        return "Take a rest and recharge 💤";
    } elseif ($mood == "Angry") {
        return "Take a deep breath and relax 😌";
    } else {
        return "I hope your day goes well 🌈";
    }
}

// 判断表单是否提交（if/else 决策语句）
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $mood = $_POST["mood"];

    echo "<h2>Hello, $name!</h2>";
    echo "<p>You are feeling <strong>$mood</strong> today.</p>";
    echo "<p>" . getMoodMessage($mood) . "</p>";

    // 额外展示历史心情（for 循环）
    echo "<h3>Other moods people felt recently:</h3><ul>";
    for ($i = 0; $i < 3; $i++) {
        echo "<li>" . $moods[array_rand($moods)] . "</li>";
    }
    echo "</ul>";

} else {
    echo "<p>No mood data received. Please go back and submit again.</p>";
}
?>
</main>

<?php include('footer.php'); ?>
