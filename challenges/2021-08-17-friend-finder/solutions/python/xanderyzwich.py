from unittest import TestCase


def find_friend(friend_dict):
    not_yet_checked = list(friend_dict.keys())
    to_check = []
    current_group = []
    all_groups = []

    while not_yet_checked:
        # get student to be checked
        if len(to_check) > 0:
            checking = to_check.pop()
            not_yet_checked.remove(checking)
        else:
            checking = not_yet_checked.pop()
        # add current student to current group
        current_group.append(checking)

        # add current student's friends to be checked for current group
        for friend in friend_dict[checking]:
            known_in_current_group = friend in [*current_group, *to_check]
            if not known_in_current_group:
                to_check.append(friend)

        # prep for next iteration
        if not to_check:
            # start new group
            all_groups.append(current_group)
            current_group = []

    # print(all_groups)
    return len(all_groups)


class TestFindFriend(TestCase):

    def test_zero(self):
        data = {
            0: [1, 2], 1: [0, 5], 2: [0],
            3: [6], 4: [], 5: [1],
            6: [3]
        }
        assert find_friend(data) == 3

    def test_one(self):
        data = {
            0: [1, 2], 1: [0, 2], 2: [0, 1, 3],
            3: [2, 4], 4: [3, 5], 5: [3, 4]
        }
        assert find_friend(data) == 1

    def test_two(self):
        data = {
            0: [1], 1: [0], 2: [3], 3: [2],
            4: [5], 5: [4], 6: [7], 7: [6]
        }
        assert find_friend(data) == 4
