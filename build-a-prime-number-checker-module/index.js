/**
 * Checks if a number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} - Returns true if prime, false otherwise.
 */
function isPrime(num) {
  // الأعداد الأقل من أو تساوي 1 ليست أولية
  if (num <= 1) {
    return false;
  }
  
  // فحص القسمة من 2 إلى الجذر التربيعي للعدد لتحسين الأداء
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// تصدير الدالة كخاصية مسماة (Named Property)
module.exports = {
  isPrime
};