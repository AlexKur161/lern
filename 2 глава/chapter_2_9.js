// 5 > 4 true
// "ананас" > "яблоко" false
// "2" > "12" true
// undefined == null true
// undefined === null false
// null == "\n0\n" false
// null === +"\n0\n" false

// Очевидно, true.
// Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".
// Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".
// Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
// Строгое сравнение разных типов, поэтому false.
// Аналогично (4), null равен только undefined.
// Строгое сравнение разных типов.