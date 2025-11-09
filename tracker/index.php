<?php include('header.php'); ?>

<main>
    <h2>How are you feeling today?</h2>
    <form action="result.php" method="POST">
        <label for="name">Your name:</label>
        <input type="text" id="name" name="name" required><br><br>

        <label>Select your mood:</label><br>
        <?php
        // 使用数组 + foreach 循环生成选项
        $moods = ["Happy", "Sad", "Excited", "Tired", "Angry"];
        foreach ($moods as $mood) {
            echo "<input type='radio' name='mood' value='$mood' required> $mood<br>";
        }
        ?>
        <br>
        <input type="submit" value="Submit">
    </form>
</main>

<?php include('footer.php'); ?>
