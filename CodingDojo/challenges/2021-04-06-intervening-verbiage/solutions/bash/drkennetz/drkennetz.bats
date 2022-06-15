#!/usr/bin/env bats

@test "lady-outhouse" {
  AT=$(./drkennetz.sh -t 'There was an old lady who lived in an outhouse' -s lady -e outhouse)
  GS=4
  echo "Expected $GS got $AT"
  [ "$AT" = $GS ]
}

@test "an-outhouse" {
  AT=$(./drkennetz.sh -t 'There was an old lady who lived in an outhouse' -s an -e outhouse)
  GS=6
  echo "Expected $GS got $AT"
  [ "$AT" = $GS ]
}

@test "an-an" {
  AT=$(./drkennetz.sh -t 'There was an old lady who lived in an outhouse' -s an -e an)
  GS=5
  echo "Expected $GS got $AT"
  [ "$AT" = $GS ]
}

