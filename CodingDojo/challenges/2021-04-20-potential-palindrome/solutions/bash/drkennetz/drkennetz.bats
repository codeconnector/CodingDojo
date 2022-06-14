#!/usr/bin/env bats

@test "carrace" {
  AT=$(./drkennetz.sh "carrace")
  GS="true"
  echo "Expected $GS got $AT"
  [ "$AT" = $GS ]
}

@test "41231234" {
  AT=$(./drkennetz.sh "41231234")
  GS="true"
  echo "Expected $GS got $AT"
  [ "$AT" = $GS ]
}

@test "notapalindrome" {
  AT=$(./drkennetz.sh "notapalindrome")
  GS="false"
  echo "Expected $GS got $AT"
  [ "$AT" = $GS ]
}

@test "empty" {
  AT=$(./drkennetz.sh)
  GS="false"
  echo "Expected $GS got $AT"
  [ "$AT" = $GS ]
}

