from setuptools import find_packages, setup

packages = [
    "pytest<7,>=5"
]

setup(
    name="task",
    version="1.0.0",
    packages=find_packages(),
    package_dir={'': '.'},
    setup_requires=["pytest-runner"],
    tests_require=packages
)
